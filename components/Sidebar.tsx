import React, { useState, useEffect } from 'react';
import { 
  LayoutGrid, Image, PenTool, Globe, Palette, Printer,
  CreditCard, BookOpen, UtensilsCrossed, CalendarDays, FileImage, Smartphone,
  ChevronDown, ChevronRight, ChevronLeft
} from 'lucide-react';
import { useApp } from './AppContext';
import { CATEGORIES, Category } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const { language, selectedCategory, setSelectedCategory } = useApp();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Auto-expand parent if a child is selected
  useEffect(() => {
    CATEGORIES.forEach(cat => {
      if (cat.subCategories?.some(sub => sub.id === selectedCategory)) {
        if (!expandedCategories.includes(cat.id)) {
          setExpandedCategories(prev => [...prev, cat.id]);
        }
      }
    });
  }, [selectedCategory, expandedCategories]);

  const toggleExpand = (id: string) => {
    setExpandedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'all': return <LayoutGrid size={20} />;
      case 'Social Media': return <Image size={20} />;
      case 'Branding': return <PenTool size={20} />;
      case 'Web Design': return <Globe size={20} />;
      case 'Illustration': return <Palette size={20} />;
      case 'Print': return <Printer size={20} />;
      case 'Cards': return <CreditCard size={18} />;
      case 'Notebooks': return <BookOpen size={18} />;
      case 'Restaurant Menu': return <UtensilsCrossed size={18} />;
      case 'Calendar': return <CalendarDays size={18} />;
      case 'Flyer No BG': return <FileImage size={18} />;
      case 'Flyer Digital': return <Smartphone size={18} />;
      default: return <LayoutGrid size={18} />;
    }
  };

  const renderCategory = (cat: Category, level: number = 0) => {
    const isSelected = selectedCategory === cat.id;
    const hasSubs = cat.subCategories && cat.subCategories.length > 0;
    const isExpanded = expandedCategories.includes(cat.id);
    const isChildSelected = hasSubs && cat.subCategories?.some(sub => sub.id === selectedCategory);

    const paddingStart = level === 0 ? 'px-3' : language === 'ar' ? 'pr-8 pl-3' : 'pl-8 pr-3';

    return (
      <div key={cat.id} className="mb-1">
        <button
          onClick={() => {
            if (hasSubs) {
              toggleExpand(cat.id);
              setSelectedCategory(cat.id);
            } else {
              setSelectedCategory(cat.id);
              if (window.innerWidth < 1024) setIsOpen(false);
            }
          }}
          className={`
            w-full flex items-center justify-between gap-3 py-3 rounded-xl text-sm font-medium transition-all duration-200
            ${paddingStart}
            ${isSelected || isChildSelected
              ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300' 
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'}
          `}
        >
          <div className="flex items-center gap-3">
            {getIcon(cat.id)}
            <span className={language === 'ar' ? 'font-arabic text-base' : 'font-sans'}>
              {language === 'en' ? cat.label_en : cat.label_ar}
            </span>
          </div>
          {hasSubs && (
             <div className="text-gray-400">
               {isExpanded ? <ChevronDown size={16} /> : (language === 'ar' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />)}
             </div>
          )}
          {(isSelected || isChildSelected) && level === 0 && (
            <div className={`absolute w-1 h-5 bg-indigo-500 rounded-full ${language === 'ar' ? 'left-4' : 'right-4'}`} />
          )}
        </button>
        {hasSubs && isExpanded && (
          <div className="mt-1 space-y-1 animate-[slideDown_0.2s_ease-out] overflow-hidden">
            {cat.subCategories!.map(sub => renderCategory(sub, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      <aside 
        className={`
          fixed top-0 bottom-0 z-50 w-64 p-4
          bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border-r dark:border-r-white/10 border-gray-200
          transition-transform duration-300 ease-in-out
          ${language === 'ar' ? 'right-0 border-l border-r-0' : 'left-0'}
          ${isOpen ? 'translate-x-0' : (language === 'ar' ? 'translate-x-full' : '-translate-x-full')}
          lg:translate-x-0 lg:sticky lg:h-screen lg:top-0 overflow-y-auto
        `}
      >
        <div className="flex flex-col min-h-full">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center py-6 mb-6 border-b border-gray-100 dark:border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-lg shadow-indigo-500/30">
              P
            </div>
            <div className="text-center">
              <h1 className={`text-2xl font-bold tracking-tight leading-none ${language === 'ar' ? 'font-arabic' : 'font-sans'} text-gray-900 dark:text-white`}>
                Pro@<span className="text-indigo-500">Design</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium mt-1.5 ml-1">
                el.fakharany
              </p>
            </div>
          </div>

          <nav className="flex-1">
            {CATEGORIES.map(cat => renderCategory(cat))}
          </nav>

          <div className="mt-6">
            <div className="text-center mb-3">
              <p className="text-indigo-400 font-serif italic text-lg tracking-wide">PROMPT Library</p>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-white/10 text-xs text-gray-400 text-center font-sans">
              <p className="mb-1">Pro@Design PROMPT Library ©2026</p>
              <p className="text-gray-500 dark:text-gray-500">Ayman El.Fakharany @ai</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;