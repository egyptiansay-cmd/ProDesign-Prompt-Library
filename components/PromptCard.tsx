import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { PromptData } from '../types';
import { useApp } from './AppContext';

interface PromptCardProps {
  data: PromptData;
}

const PromptCard: React.FC<PromptCardProps> = ({ data }) => {
  const { language, showToast } = useApp();
  const [copied, setCopied] = useState(false);
  
  const [activeTab, setActiveTab] = useState<'en' | 'ar'>(language);

  useEffect(() => {
    setActiveTab(language);
  }, [language]);

  const title = language === 'en' ? data.title_en : data.title_ar;
  const promptText = activeTab === 'en' ? data.prompt_text_en : data.prompt_text_ar;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    const msg = activeTab === 'en' 
      ? 'English prompt copied!' 
      : 'تم نسخ النص العربي!';
    showToast(msg);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white/5 bg-white border border-gray-200 dark:border-white/10 flex flex-col h-full">
      {/* Image Section - Reduced Height */}
      <div className="relative h-32 overflow-hidden shrink-0">
        <img 
          src={data.image_url} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section - Compact Padding */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
            {data.category}
          </span>
          {/* Language Tabs - Compact */}
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setActiveTab('en')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors ${activeTab === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-white/10 text-gray-500'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setActiveTab('ar')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors font-arabic ${activeTab === 'ar' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-white/10 text-gray-500'}`}
            >
              عربي
            </button>
          </div>
        </div>

        <h3 className={`text-base font-bold mb-2 leading-tight ${language === 'ar' ? 'font-arabic' : 'font-sans'} text-gray-900 dark:text-white`}>
          {title}
        </h3>

        {/* Prompt Preview - Optimized for text density */}
        <div className="relative mb-3 p-2.5 bg-gray-50 dark:bg-black/30 rounded border border-gray-100 dark:border-white/5 flex-1 min-h-[100px]">
          <p className={`text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-5 ${activeTab === 'ar' ? 'font-arabic text-right' : 'font-mono text-left'}`} dir={activeTab === 'ar' ? 'rtl' : 'ltr'}>
            {promptText}
          </p>
        </div>

        <div className="mt-auto pt-2 border-t border-gray-100 dark:border-white/5 flex items-center justify-between gap-2">
           {/* Tags - Very compact */}
          <div className="flex flex-wrap gap-1 overflow-hidden h-5">
            {data.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="px-1.5 py-0.5 text-[9px] uppercase font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button - Compact */}
          <button
            onClick={handleCopy}
            className={`shrink-0 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg font-medium transition-all duration-200 text-xs
              ${copied 
                ? 'bg-green-500 text-white' 
                : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span className={language === 'ar' ? 'font-arabic' : 'font-sans'}>
              {copied 
                ? (language === 'en' ? 'Copied' : 'تم النسخ') 
                : (language === 'en' ? 'Copy' : 'نسخ')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;