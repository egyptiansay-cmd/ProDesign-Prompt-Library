import React from 'react';
import { Search, Moon, Sun, Menu, Globe, ShieldCheck } from 'lucide-react';
import { useApp } from './AppContext';

interface TopBarProps {
  toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar }) => {
  const { 
    theme, toggleTheme, language, setLanguage, 
    searchQuery, setSearchQuery, currentView, setCurrentView 
  } = useApp();

  return (
    <header className="sticky top-0 z-30 px-6 py-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-white/10">
      <div className="flex items-center justify-between gap-4">
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
        >
          <Menu size={24} />
        </button>

        {/* Search Bar - Hidden in Admin View */}
        {currentView === 'library' ? (
          <div className="flex-1 max-w-xl relative">
            <div className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${language === 'ar' ? 'right-3' : 'left-3'}`}>
              <Search size={20} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? "Search prompts..." : "بحث عن الأوامر..."}
              className={`
                w-full bg-gray-100 dark:bg-black/20 border-none rounded-xl py-2.5 
                text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all
                ${language === 'ar' ? 'pr-10 pl-4 font-arabic' : 'pl-10 pr-4 font-sans'}
              `}
            />
          </div>
        ) : (
          <div className="flex-1 font-bold text-indigo-500 flex items-center gap-2">
            <ShieldCheck size={24} />
            <span className="hidden sm:inline">Admin Terminal</span>
          </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* ProAi Access Button */}
          {currentView === 'library' && (
            <button
              onClick={() => setCurrentView('admin')}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold text-white bg-indigo-600/90 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              <ShieldCheck size={18} className="group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">ProAi</span>
            </button>
          )}

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            <Globe size={18} />
            <span className="hidden md:inline">{language === 'en' ? 'Arabic' : 'English'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors bg-gray-100 dark:bg-white/5"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;