import React, { useState } from 'react';
import { useApp } from './AppContext';
import { 
  LayoutGrid, UserPlus, Lock, ShieldCheck, 
  ExternalLink, LogOut, Globe, Copy, Check 
} from 'lucide-react';
import { User } from '../types';

const ProAiDashboard: React.FC = () => {
  const { 
    users, addUser, language, setLanguage, setCurrentView, 
    showToast, currentUser, setCurrentUser 
  } = useApp();
  
  // شاشة الدخول - حالات الإدخال
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  
  // لوحة تحكم الأدمن - حالات إضافة مستخدم جديد
  const [newName, setNewName] = useState('');
  const [newCode, setNewCode] = useState('');
  const [newLink, setNewLink] = useState('');
  const [copyingId, setCopyingId] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من بيانات الأدمن
    if (usernameInput === 'ProAi' && passwordInput === 'proai') {
      const admin: User = { id: 'admin', name: 'ProAi', code: 'proai', link: '#', role: 'admin' };
      setCurrentUser(admin);
      setCurrentView('library');
      showToast(language === 'en' ? 'Welcome Admin' : 'تم تسجيل دخول المدير');
      return;
    }

    // التحقق من المستخدمين العاديين من المصفوفة الثابتة
    const foundUser = users.find(u => u.name.toLowerCase() === usernameInput.toLowerCase() && u.code === passwordInput);
    if (foundUser) {
      setCurrentUser({ ...foundUser, role: 'user' });
      setCurrentView('library');
      showToast(language === 'en' ? `Welcome ${foundUser.name}` : `أهلاً بك ${foundUser.name}`);
    } else {
      showToast(language === 'en' ? 'Invalid username or password' : 'اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('admin'); // العودة لشاشة الدخول
    setUsernameInput('');
    setPasswordInput('');
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newCode || !newLink) {
      showToast(language === 'en' ? 'Please fill all fields' : 'يرجى ملء جميع الحقول');
      return;
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      name: newName,
      code: newCode,
      link: newLink,
      role: 'user'
    };
    
    addUser(newUser);
    setNewName('');
    setNewCode('');
    setNewLink('');
    showToast(language === 'en' ? 'User added successfully' : 'تم إضافة المستخدم بنجاح');
  };

  // دالة نسخ بيانات المستخدم بشكل منسق حسب طلب المطور
  const handleCopyUserDetails = (user: User) => {
    const message = language === 'ar' 
      ? `تفاصيل الدخول الخاصة بك لنظام\nPrompt Library -ProDesign\nAyman El.Fakharany@\n\n👤 الاسم: ${user.name}\n🔑 الرمز السري: ${user.code}\n🌐 الرابط: ${user.link}`
      : `Your system access details for\nPrompt Library -ProDesign\nAyman El.Fakharany@\n\n👤 Name: ${user.name}\n🔑 Passcode: ${user.code}\n🌐 Link: ${user.link}`;
    
    navigator.clipboard.writeText(message);
    setCopyingId(user.id);
    showToast(language === 'ar' ? 'تم نسخ بيانات المستخدم!' : 'User details copied!');
    setTimeout(() => setCopyingId(null), 2000);
  };

  // 1. شاشة تسجيل الدخول الإجبارية (مع اللوجو والتذييل المطور)
  if (!currentUser) {
    return (
      <div className="flex-1 min-h-screen flex flex-col items-center justify-center p-6 bg-slate-900/95 relative overflow-hidden">
        {/* عناصر خلفية جمالية */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="max-w-md w-full glass-panel-light dark:bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl animate-[fadeIn_0.5s_ease-out] z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* اللوجو المستعاد */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-xl shadow-indigo-500/30">
              P
            </div>
            
            <div className="mb-4">
              <h1 className={`text-3xl font-bold tracking-tight leading-none ${language === 'ar' ? 'font-arabic' : 'font-sans'} text-gray-900 dark:text-white`}>
                Pro<span className="text-indigo-500">Design</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-1.5 opacity-80">
                EL.FAKHARANY
              </p>
            </div>

            <p className={`text-indigo-500 font-medium text-sm px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {language === 'ar' ? 'مكتبة الأوامر الذكية' : 'Prompt Library'}
            </p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="text"
                placeholder={language === 'ar' ? "اسم المستخدم" : "Username"}
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className={`w-full bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-center ${language === 'ar' ? 'font-arabic text-lg' : 'font-sans'}`}
              />
            </div>
            <div>
              <input 
                type="password"
                placeholder={language === 'ar' ? "كلمة المرور" : "Password"}
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className={`w-full bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-center ${language === 'ar' ? 'font-arabic text-lg' : 'font-sans'}`}
              />
            </div>
            
            <button 
              type="submit"
              className={`w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/30 text-lg ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
            >
              {language === 'ar' ? 'دخول للنظام' : 'Login Now'}
            </button>
          </form>
          
          <div className="mt-8 flex flex-col items-center">
             <button 
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="text-xs font-bold text-gray-500 hover:text-indigo-400 tracking-[0.2em] uppercase transition-colors flex items-center gap-2 mb-6"
             >
               <Globe size={14} />
               {language === 'ar' ? 'ENGLISH' : 'اللغة العربية'}
             </button>

             {/* تذييل الصفحة المستعاد */}
             <div className="text-center space-y-1 opacity-60">
                <p className="text-[10px] text-gray-400 font-sans">Prompt Library by ProDesign 2025©</p>
                <p className="text-[10px] text-gray-500 font-sans tracking-wide">Ayman El.Fakharany @ai</p>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. لوحة تحكم الأدمن (تظهر بعد تسجيل دخول الأدمن)
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 animate-[fadeIn_0.4s_ease-out]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className={language === 'ar' ? 'font-arabic' : 'font-sans'}>
            <div className="flex items-center gap-2 text-indigo-500 mb-1">
              <ShieldCheck size={20} />
              <span className="text-xs font-bold uppercase tracking-wider">
                 {language === 'ar' ? 'نظام التحكم' : 'Admin System'}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {language === 'ar' ? 'لوحة تحكم ProAi' : 'ProAi Control Center'}
            </h1>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => setCurrentView('library')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-all font-medium"
            >
              <LayoutGrid size={18} />
              {language === 'ar' ? 'الذهاب للمكتبة' : 'Go to Library'}
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all font-medium"
            >
              <LogOut size={18} />
              {language === 'ar' ? 'تسجيل الخروج' : 'Logout'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* قائمة المستخدمين */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white dark:bg-slate-900/40 rounded-3xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-xl">
              <div className="p-6 border-b border-gray-100 dark:border-white/5 flex justify-between items-center">
                <h3 className={`font-bold text-lg ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {language === 'ar' ? 'دليل المستخدمين المعتمدين' : 'Authorized Users Directory'}
                </h3>
                <span className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-500 text-xs font-bold">{users.length} Users</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className={`w-full ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <thead className="bg-gray-50 dark:bg-black/20 text-xs font-bold text-gray-500 uppercase">
                    <tr>
                      <th className="px-6 py-4">{language === 'ar' ? 'الاسم' : 'Name'}</th>
                      <th className="px-6 py-4">{language === 'ar' ? 'الرمز' : 'Code'}</th>
                      <th className="px-6 py-4">{language === 'ar' ? 'الرابط' : 'Link'}</th>
                      <th className="px-6 py-4 text-center">{language === 'ar' ? 'إجراء' : 'Action'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">{user.name}</td>
                        <td className="px-6 py-4 font-mono text-indigo-500 text-xs">{user.code}</td>
                        <td className="px-6 py-4">
                          <a href={user.link} target="_blank" rel="noopener" className="text-gray-400 hover:text-indigo-500 flex items-center gap-1 transition-colors text-xs">
                            <span className="truncate max-w-[120px]">{user.link}</span>
                            <ExternalLink size={12} />
                          </a>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleCopyUserDetails(user)}
                            title={language === 'ar' ? 'نسخ بيانات الدخول' : 'Copy access details'}
                            className={`p-2 rounded-lg transition-all ${copyingId === user.id ? 'bg-green-500 text-white' : 'bg-indigo-600/10 text-indigo-500 hover:bg-indigo-600 hover:text-white'}`}
                          >
                            {copyingId === user.id ? <Check size={16} /> : <Copy size={16} />}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[10px] text-center text-gray-500 italic">
              * ملاحظة: يتم تحميل المستخدمين افتراضياً من ملف usersData.ts. التعديلات هنا مؤقتة حتى تحديث الكود الأساسي.
            </p>
          </div>

          {/* فورم إضافة مستخدم */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900/40 rounded-3xl border border-gray-200 dark:border-white/10 p-6 shadow-xl sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <UserPlus size={20} />
                </div>
                <h3 className={`font-bold text-lg ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                  {language === 'ar' ? 'إضافة مستخدم جديد' : 'New User'}
                </h3>
              </div>
              <form onSubmit={handleAddUser} className="space-y-4">
                <input type="text" placeholder="الاسم" value={newName} onChange={e => setNewName(e.target.value)} className="w-full bg-gray-50 dark:bg-black/20 border-none rounded-xl px-4 py-3 outline-none text-sm" />
                <input type="text" placeholder="الرمز السري" value={newCode} onChange={e => setNewCode(e.target.value)} className="w-full bg-gray-50 dark:bg-black/20 border-none rounded-xl px-4 py-3 outline-none text-sm" />
                <input type="url" placeholder="رابط الموقع" value={newLink} onChange={e => setNewLink(e.target.value)} className="w-full bg-gray-50 dark:bg-black/20 border-none rounded-xl px-4 py-3 outline-none text-sm" />
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-all">
                  {language === 'ar' ? 'تأكيد الإضافة' : 'Add User'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProAiDashboard;