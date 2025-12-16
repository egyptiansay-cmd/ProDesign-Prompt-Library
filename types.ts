export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface PromptData {
  id: number;
  category: string;
  title_en: string;
  title_ar: string;
  image_url: string;
  prompt_text_en: string;
  prompt_text_ar: string;
  tags: string[];
}

export interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

export interface Category {
  id: string;
  label_en: string;
  label_ar: string;
  subCategories?: Category[];
}

export const CATEGORIES: Category[] = [
  { id: 'all', label_en: 'All Prompts', label_ar: 'كل الأوامر' },
  { id: 'Social Media', label_en: 'Social Media', label_ar: 'وسائل التواصل' },
  { id: 'Branding', label_en: 'Branding', label_ar: 'الهوية البصرية' },
  { 
    id: 'Print', 
    label_en: 'Print Designs', 
    label_ar: 'المطبوعات',
    subCategories: [
      { id: 'Cards', label_en: 'Card Designs', label_ar: 'تصميمات كروت' },
      { id: 'Notebooks', label_en: 'Notebook Designs', label_ar: 'تصميمات دفاتر' },
      { id: 'Restaurant Menu', label_en: 'Restaurant Menus', label_ar: 'تصميم منيو مطعم' },
      { id: 'Calendar', label_en: 'New Year Calendar', label_ar: 'نتيجة السنة الجديدة' },
      { id: 'Flyer No BG', label_en: 'Flyer (No BG)', label_ar: 'فلاير بدون أرضيات' },
      { id: 'Flyer Digital', label_en: 'Digital Flyer', label_ar: 'فلاير ديجيتال' },
    ]
  },
  { id: 'Web Design', label_en: 'Web Design', label_ar: 'تصميم الويب' },
  { id: 'Illustration', label_en: 'Illustration', label_ar: 'الرسوم التوضيحية' },
];