import React, { useState } from 'react';
import { AppContextProvider, useApp } from './components/AppContext';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import PromptCard from './components/PromptCard';
import ProAiDashboard from './components/ProAiDashboard';
import { PROMPTS_DATA } from './constants';
import { CATEGORIES } from './types';
import { XCircle } from 'lucide-react';

const Toast = () => {
  const { toastMessage } = useApp();
  if (!toastMessage) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-[slideUp_0.3s_ease-out]">
      <div className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl font-medium text-sm">
        {toastMessage}
      </div>
    </div>
  );
};

const getCategoryIds = (catId: string): string[] => {
  const findCategory = (id: string, cats: typeof CATEGORIES): string[] => {
    for (const cat of cats) {
      if (cat.id === id) {
        const ids = [id];
        if (cat.subCategories) cat.subCategories.forEach(sub => ids.push(...findCategory(sub.id, cat.subCategories!)));
        return ids;
      } else if (cat.subCategories) {
        const found = findCategory(id, cat.subCategories);
        if (found.length > 0 && found[0] === id) return found;
      }
    }
    return [];
  };
  const result = findCategory(catId, CATEGORIES);
  return result.length > 0 ? result : [catId];
};

const LayoutContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { searchQuery, selectedCategory, language, currentView, currentUser } = useApp();

  // بوابة الحماية: إذا لم يكن هناك مستخدم مسجل، اعرض شاشة الدخول فقط
  if (!currentUser) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-950">
        <ProAiDashboard />
        <Toast />
      </div>
    );
  }

  const filteredPrompts = PROMPTS_DATA.filter((item) => {
    const validCategories = selectedCategory === 'all' ? [] : getCategoryIds(selectedCategory);
    const matchesCategory = selectedCategory === 'all' || validCategories.includes(item.category);
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = item.title_en.toLowerCase().includes(searchLower) || item.title_ar.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50 dark:bg-slate-950">
      {currentView === 'library' && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
      
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <TopBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <div className="flex-1 overflow-y-auto">
          {currentView === 'library' ? (
            <div className="p-4 md:p-8 max-w-7xl mx-auto">
              <div className="mb-8">
                 <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                   {selectedCategory === 'all' ? (language === 'en' ? 'Prompts' : 'الأوامر') : selectedCategory}
                 </h2>
              </div>
              {filteredPrompts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredPrompts.map(p => <PromptCard key={p.id} data={p} />)}
                </div>
              ) : (
                <div className="flex flex-col items-center py-20 text-gray-400">
                  <XCircle size={64} className="mb-4" />
                  <p>{language === 'en' ? 'No results found' : 'لا توجد نتائج'}</p>
                </div>
              )}
            </div>
          ) : (
            <ProAiDashboard />
          )}
        </div>
      </main>
      <Toast />
    </div>
  );
};

const App = () => (
  <AppContextProvider>
    <LayoutContent />
  </AppContextProvider>
);

export default App;