import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import { AppContextType, Language, Theme, View, User } from '../types';
import { INITIAL_USERS } from '../usersData';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
  // Localization and UI Theme (Purely presentational state)
  const [language, setLanguage] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // 🔐 USER & SESSION MANAGEMENT (No Persistence / No LocalStorage)
  // All user modifications in this state are temporary for the current session.
  // Permanent changes must be made in 'usersData.ts' and redeployed.
  const [currentView, setCurrentView] = useState<View>('library');
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    root.setAttribute('lang', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addUser = (user: User) => {
    // Note: This only adds to the local state for the current session.
    setUsers(prev => [...prev, user]);
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      toggleTheme,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      toastMessage,
      showToast,
      currentView,
      setCurrentView,
      users,
      addUser,
      currentUser,
      setCurrentUser
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppContextProvider');
  }
  return context;
};