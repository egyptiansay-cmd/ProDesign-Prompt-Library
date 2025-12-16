import React, { useState } from 'react';
import { AppContextProvider, useApp } from './components/AppContext';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import PromptCard from './components/PromptCard';
import { PROMPTS_DATA } from './constants';
import { CATEGORIES } from './types';
import { XCircle } from 'lucide-react';

// Toast Notification Component
const Toast = () => {
  const { toastMessage } = useApp();
  
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-[slideUp_0.3s_ease-out]">
      <div className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl flex items-center gap-3 font-medium text-sm">
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

// Helper to get all sub-category IDs for a given category ID
const getCategoryIds = (catId: string): string[] => {
  const findCategory = (id: string, cats: typeof CATEGORIES): string[] => {
    for (const cat of cats) {
      if (cat.id === id) {
        const ids = [id];
        if (cat.subCategories) {
          cat.subCategories.forEach(sub => ids.push(...findCategory(sub.id, cat.subCategories!)));
        }
        return ids;
      } else if (cat.subCategories) {
        // Search deeper
        const found = findCategory(id, cat.subCategories);
        if (found.length > 0 && found[0] === id) {
          // Check if we found the target in children, but 'found' will return just the target's subtree 
          // because of the recursion logic above.
          // Actually, the recursion logic above returns [id, ...children] if it matches.
          // If we are here, it means cat.id != id.
          // So if 'found' has items, it means we found the target deeper.
          return found; 
        }
      }
    }
    return [];
  };
  
  const result = findCategory(catId, CATEGORIES);
  return result.length > 0 ? result : [catId];
};

// Helper to get Label
const getCategoryLabel = (catId: string, lang: 'en' | 'ar') => {
  const findLabel = (id: string, cats: typeof CATEGORIES): string | null => {
    for (const cat of cats) {
      if (cat.id === id) return lang === 'en' ? cat.label_en : cat.label_ar;
      if (cat.subCategories) {
        const sub = findLabel(id, cat.subCategories);
        if (sub) return sub;
      }
    }
    return null;
  };
  return findLabel(catId, CATEGORIES) || catId;
};


// Main Layout Component
const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { searchQuery, selectedCategory, language } = useApp();

  // Filter Logic
  const filteredPrompts = PROMPTS_DATA.filter((item) => {
    // Get all valid categories (including selected + children)
    const validCategories = selectedCategory === 'all' 
      ? [] 
      : getCategoryIds(selectedCategory);

    const matchesCategory = selectedCategory === 'all' || validCategories.includes(item.category);
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      item.title_en.toLowerCase().includes(searchLower) ||
      item.title_ar.toLowerCase().includes(searchLower) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <TopBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          
          <div className="max-w-7xl mx-auto">
            {/* Header / Breadcrumbs */}
            <div className="mb-8">
               <h2 className={`text-3xl font-bold mb-2 ${language === 'ar' ? 'font-arabic' : 'font-sans'} text-gray-900 dark:text-white`}>
                 {selectedCategory === 'all' 
                    ? (language === 'en' ? 'Latest Prompts' : 'أحدث الأوامر')
                    : getCategoryLabel(selectedCategory, language)
                 }
               </h2>
               <p className="text-gray-500 dark:text-gray-400">
                 {language === 'en' 
                    ? 'Explore and copy high-quality AI prompts for your next design.' 
                    : 'استكشف وانسخ أوامر الذكاء الاصطناعي عالية الجودة لتصميمك القادم.'}
               </p>
            </div>

            {/* Grid */}
            {filteredPrompts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPrompts.map((prompt) => (
                  <PromptCard key={prompt.id} data={prompt} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                <XCircle size={64} className="mb-4 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {language === 'en' ? 'No prompts found' : 'لم يتم العثور على نتائج'}
                </h3>
                <p className="text-gray-500">
                  {language === 'en' ? 'Try adjusting your search or category.' : 'حاول تعديل البحث أو الفئة.'}
                </p>
              </div>
            )}
          </div>
          
          {/* Bottom Spacer for Toast */}
          <div className="h-20" />
        </div>
      </main>

      <Toast />
    </div>
  );
};

const App = () => {
  return (
    <AppContextProvider>
      <Layout />
    </AppContextProvider>
  );
};

export default App;