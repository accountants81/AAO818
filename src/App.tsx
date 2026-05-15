import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Languages, 
  User, 
  Key, 
  MessageCircle, 
  ExternalLink, 
  FileText, 
  LogOut,
  ChevronRight,
  ShieldCheck,
  Wallet,
  Compass,
  PenTool,
  BookOpen,
  Sparkles,
  Dumbbell,
  GraduationCap,
  Library,
  Trophy,
  CheckSquare,
  Activity
} from 'lucide-react';
import { Language, Theme } from './types';
import { WHATSAPP_LINKS, TOOLS_LINKS, TRANSLATIONS, LOGO_URL } from './constants';

// Memoized Clock Component for performance
const ClockDisplay = ({ theme, isRtl, t, lang }: { theme: Theme, isRtl: boolean, t: any, lang: Language }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-[32px] transition-all border ${theme === 'dark' ? 'bg-white/[0.03] border-white/10 shadow-2xl backdrop-blur-xl' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`}
    >
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Date Section */}
        <div className="px-8 py-6 md:py-8 flex flex-col justify-center flex-1 items-start text-start">
           <p className="text-[11px] font-black text-brand-accent uppercase tracking-[0.2em] mb-1">{t.days[currentTime.getDay()]}</p>
           <div className="flex items-baseline gap-2">
             <span className={`text-4xl md:text-5xl font-black italic tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{currentTime.getDate()}</span>
             <span className="text-xl md:text-2xl font-black opacity-20 italic">{t.months[currentTime.getMonth()]}</span>
           </div>
           <p className="text-[10px] font-bold opacity-10 tracking-[0.4em] font-mono mt-1">{currentTime.getFullYear()}</p>
        </div>

        {/* Subtle Divider */}
        <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent self-stretch my-6"></div>
        <div className="md:hidden h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>

        {/* Time Section */}
        <div className="px-8 py-6 md:py-8 flex flex-col justify-center flex-1 items-end text-end">
           <div className="flex items-baseline gap-3">
             <div className="flex flex-col items-center opacity-30 relative top-1">
               <span className="text-[9px] font-black uppercase leading-none">
                 {currentTime.getHours() >= 12 ? (lang === 'ar' ? 'مساءً' : 'PM') : (lang === 'ar' ? 'صباحاً' : 'AM')}
               </span>
             </div>
             <span className={`text-5xl md:text-6xl font-black tabular-nums tracking-tighter leading-none ${theme === 'dark' ? 'text-brand-accent brightness-125 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'text-slate-900'}`}>
               {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
             </span>
             <div className="flex flex-col items-center ps-1">
                <span className="w-1 h-1 rounded-full bg-brand-accent animate-ping mb-1"></span>
                <span className="text-[10px] font-black opacity-20 tabular-nums">{currentTime.getSeconds().toString().padStart(2, '0')}</span>
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('aaamo_logged_in') === 'true';
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('aaamo_lang') as Language) || 'ar';
  });
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('aaamo_theme') as Theme) || 'dark';
  });
  const [isWAExpanded, setIsWAExpanded] = useState(false);

  // Robust Login Sync
  useEffect(() => {
    const checkLogin = () => {
      const status = localStorage.getItem('aaamo_logged_in') === 'true';
      if (status !== isLoggedIn) setIsLoggedIn(status);
    };
    window.addEventListener('storage', checkLogin);
    return () => window.removeEventListener('storage', checkLogin);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('aaamo_lang', lang);
    localStorage.setItem('aaamo_theme', theme);
  }, [lang, theme]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (email === 'AAO818@gmail.com' && password === 'AAO818') {
      localStorage.setItem('aaamo_logged_in', 'true');
      setIsLoggedIn(true);
      setError('');
    } else {
      setError(TRANSLATIONS[lang].invalidLogin);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('aaamo_logged_in');
    setIsLoggedIn(false);
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const getWAIcon = (id: string) => {
    const iconClass = "w-4 h-4 text-brand-emerald group-hover:scale-110 transition-transform";
    switch (id) {
      case 'wa-1': return <Wallet className={iconClass} />;
      case 'wa-2': return <Compass className={iconClass} />;
      case 'wa-3': return <PenTool className={iconClass} />;
      case 'wa-4': return <BookOpen className={iconClass} />;
      case 'wa-5': return <Sparkles className={iconClass} />;
      case 'wa-6': return <Dumbbell className={iconClass} />;
      case 'wa-7': return <GraduationCap className={iconClass} />;
      case 'wa-8': return <Library className={iconClass} />;
      case 'wa-9': return <Trophy className={iconClass} />;
      case 'wa-10': return <CheckSquare className={iconClass} />;
      case 'wa-11': return <Activity className={iconClass} />;
      default: return <MessageCircle className={iconClass} />;
    }
  };

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return t.greetings.morning;
    if (hours < 18) return t.greetings.afternoon;
    return t.greetings.evening;
  };

  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen transition-all duration-500 flex flex-col items-center justify-center p-6 ${theme === 'dark' ? 'bg-brand-bg text-white' : 'bg-[#f8fafc] text-slate-900'} ${isRtl ? 'rtl' : 'ltr'}`}>
        {/* Header Actions */}
        <div className="fixed top-8 left-0 right-0 px-8 flex items-center justify-between z-10">
          <button 
            onClick={toggleLang} 
            className={`h-11 flex items-center gap-2 px-5 rounded-2xl transition-all shadow-md font-black text-xs uppercase border ${theme === 'dark' ? 'bg-brand-card border-white/10' : 'bg-white border-slate-200'}`}
          >
            <Languages className="w-5 h-5 text-brand-accent" />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>
          
          <button 
            onClick={toggleTheme} 
            className={`w-11 h-11 flex items-center justify-center rounded-2xl transition-all shadow-md border ${theme === 'dark' ? 'bg-brand-card border-white/10 text-yellow-500' : 'bg-white border-slate-200 text-slate-600'}`}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-[380px] p-10 rounded-[50px] shadow-2xl transition-colors duration-500 flex flex-col items-center border ${theme === 'dark' ? 'bg-brand-card border-white/5' : 'bg-white border-slate-100'}`}
        >
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-brand-accent/20 blur-3xl rounded-full scale-125"></div>
            <img 
              src={LOGO_URL} 
              alt="Logo" 
              className="w-24 h-24 rounded-full shadow-2xl border-2 border-brand-accent/30 object-cover relative z-10" 
            />
          </div>

          <h1 className="text-2xl font-black mb-1.5 opacity-90 text-center tracking-tight">{t.loginTitle}</h1>
          <p className="text-[11px] opacity-40 mb-10 font-bold text-center leading-relaxed px-4">{t.loginSubtitle}</p>

          <form onSubmit={handleLogin} className="w-full space-y-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black opacity-30 px-1.5 block uppercase tracking-widest text-start">{t.emailLabel}</label>
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className={`w-full h-14 ps-12 pe-4 rounded-2xl outline-none transition-all border font-bold text-sm ${theme === 'dark' ? 'bg-brand-bg border-white/5 focus:border-brand-accent/50 text-white' : 'bg-slate-50 border-slate-200 focus:border-brand-accent'}`}
                  />
                  <div className="absolute start-4 top-1/2 -translate-y-1/2 opacity-30">
                    <User className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black opacity-30 px-1.5 block uppercase tracking-widest text-start">{t.passwordLabel}</label>
                <div className="relative">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`w-full h-14 ps-12 pe-4 rounded-2xl outline-none transition-all border font-bold text-sm ${theme === 'dark' ? 'bg-brand-bg border-white/5 focus:border-brand-accent/50 text-white' : 'bg-slate-50 border-slate-200 focus:border-brand-accent'}`}
                  />
                   <div className="absolute start-4 top-1/2 -translate-y-1/2 opacity-30">
                    <Key className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {error && <p className="text-rose-500 text-[11px] text-center font-black animate-pulse">{error}</p>}

            <button 
              type="submit"
              className="w-full h-14 bg-brand-accent hover:bg-brand-accent/90 active:scale-95 text-white rounded-2xl font-black text-base flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-accent/20 mt-4"
            >
              <ShieldCheck className="w-5 h-5" />
              {t.loginButton}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#050810] text-white' : 'bg-[#f0f4f8] text-slate-900'} ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Optimized Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] transition-opacity duration-1000 ${theme === 'dark' ? 'bg-brand-accent/10 opacity-30' : 'bg-brand-accent/5 opacity-40'}`}></div>
        <div className={`absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full blur-[100px] transition-opacity duration-1000 ${theme === 'dark' ? 'bg-brand-emerald/5 opacity-20' : 'bg-brand-emerald/30 opacity-10'}`}></div>
      </div>

      <header className="px-6 py-4 md:px-12 flex items-center justify-between sticky top-0 bg-opacity-70 backdrop-blur-3xl z-50 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all shadow-lg border backdrop-blur-md ${theme === 'dark' ? 'bg-brand-card/40 border-white/10 text-yellow-500 hover:scale-110 active:scale-90' : 'bg-white/80 border-slate-200 text-slate-600 hover:scale-110 active:scale-90'}`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button 
              onClick={toggleLang} 
              className={`h-10 flex items-center gap-2 px-4 rounded-xl transition-all shadow-lg font-black text-[10px] uppercase border backdrop-blur-md ${theme === 'dark' ? 'bg-brand-card/40 border-white/10 text-white hover:scale-105 active:scale-95' : 'bg-white/80 border-slate-200 text-slate-800 hover:scale-105 active:scale-95'}`}
            >
              <Languages className="w-3.5 h-3.5 text-brand-accent" />
              <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
          </div>

          <button 
            onClick={handleLogout}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase italic transition-all border ${theme === 'dark' ? 'bg-rose-500/10 border-rose-500/30 text-rose-500 hover:bg-rose-500 hover:text-white' : 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-600 hover:text-white'}`}
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{t.logoutButton}</span>
          </button>
      </header>

      <main className="max-w-xl mx-auto px-6 pb-20 pt-10 space-y-8 relative z-10">
        {/* Logo Section & Greeting */}
        <div className="flex flex-col items-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group "
          >
            <div className="absolute inset-0 bg-brand-accent/30 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            <img 
              src={LOGO_URL} 
              alt="Logo" 
              className="w-32 h-32 md:w-36 md:h-36 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.3)] border-4 border-white/10 object-cover relative z-10 transition-transform duration-700 hover:rotate-3" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white/90 leading-none italic uppercase drop-shadow-2xl">
               {getGreeting()}
             </h2>
             <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.5em] mt-2 mb-8">
               {lang === 'ar' ? 'عالم الإنجاز' : 'WORLD OF ACHIEVEMENT'}
             </p>
          </motion.div>
        </div>

        {/* Integrated Clock Display */}
        <ClockDisplay theme={theme} isRtl={isRtl} t={t} lang={lang} />

        {/* Tools Section - Styled like the image list */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-3 px-2">
             <div className="w-2 h-7 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
             <h2 className={`text-xl font-black tracking-tight uppercase italic opacity-80 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{t.sections.tools}</h2>
          </div>
          
          {TOOLS_LINKS.map((link, idx) => (
             <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx }}
                className={`group relative overflow-hidden flex items-center h-[92px] rounded-[26px] transition-all border ${theme === 'dark' ? 'bg-[#0c1121]/80 hover:bg-[#121a30] border-white/10 active:scale-[0.99] shadow-2xl shadow-black/20' : 'bg-white hover:bg-slate-50 border-slate-200 shadow-xl shadow-slate-200/50'}`}
             >
                {/* Thick vertical accent bar with glow */}
                <div className={`absolute top-0 bottom-0 start-0 w-2.5 transition-all group-hover:w-4 ${link.color} shadow-[4px_0_20px_rgba(0,0,0,0.5)]`}></div>
                
                <div className="flex-1 flex flex-col justify-center ps-14 pe-6">
                  <h3 className="text-[16px] md:text-[18px] font-black tracking-tight mb-0.5 truncate leading-tight group-hover:text-brand-accent transition-colors italic uppercase">{link.title[lang]}</h3>
                  <p className="text-[9px] md:text-[10px] font-bold opacity-30 truncate leading-relaxed tracking-widest uppercase">{link.description[lang]}</p>
                </div>

                <div className={`me-6 p-3.5 rounded-[20px] transition-all shadow-inner border border-white/5 flex items-center justify-center ${theme === 'dark' ? 'bg-[#1a2333]/60 group-hover:bg-brand-accent/20 group-hover:border-brand-accent/30' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                   {link.type === 'file' ? <FileText className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" /> : <ChevronRight className={`w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity ${isRtl ? 'rotate-180 text-brand-accent' : 'text-brand-accent'}`} />}
                </div>
             </motion.a>
          ))}
        </section>

        {/* WhatsApp Groups Section - Perfectly Harmonized */}
        <section className="pt-5 space-y-3">
           <div className="flex items-center justify-between px-2">
               <div className="flex items-center gap-2.5">
                 <div className="w-1 h-5 bg-brand-emerald rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)]"></div>
                 <h2 className={`text-base font-black tracking-tight uppercase italic opacity-60 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{t.sections.whatsapp}</h2>
               </div>
               
               <button 
                 onClick={() => setIsWAExpanded(!isWAExpanded)}
                 className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase italic transition-all border backdrop-blur-md active:scale-95 ${theme === 'dark' ? 'bg-brand-emerald/10 border-brand-emerald/30 text-brand-emerald hover:bg-brand-emerald/20' : 'bg-white border-brand-emerald/20 text-brand-emerald hover:bg-brand-emerald/5'}`}
               >
                 <span>{isWAExpanded ? (lang === 'ar' ? 'إخفاء القائمة' : 'HIDE LIST') : (lang === 'ar' ? 'عرض المجموعات' : 'SHOW GROUPS')}</span>
                 <motion.div
                    animate={{ rotate: isWAExpanded ? 90 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                 >
                    <ChevronRight className="w-3.5 h-3.5" />
                 </motion.div>
               </button>
            </div>

          <div className="grid grid-cols-1 gap-2.5">
            <AnimatePresence initial={false}>
              {isWAExpanded && (
                <motion.div 
                  key="wa-list-items"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2.5 overflow-hidden"
                >
                  {WHATSAPP_LINKS.map((link, idx) => (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.02 }}
                      className={`group relative overflow-hidden flex items-center h-[76px] rounded-[20px] transition-all border ${theme === 'dark' ? 'bg-[#0c1121]/80 hover:bg-[#121a30] border-white/10 active:scale-[0.99] shadow-xl' : 'bg-white hover:bg-slate-50 border-slate-200 shadow-sm'}`}
                    >
                       <div className="absolute top-0 bottom-0 start-0 w-1.5 transition-all group-hover:w-2.5 bg-brand-emerald shadow-[4px_0_15px_rgba(16,185,129,0.2)]"></div>
                       
                       <div className="flex-1 flex flex-col justify-center min-w-0 ps-12 pe-4">
                         <h3 className="text-[15px] font-black tracking-tight mb-0.5 truncate italic uppercase leading-none">{link.title[lang]}</h3>
                         <p className="text-[8px] font-bold opacity-30 truncate uppercase tracking-widest">{link.description[lang]}</p>
                       </div>

                       <div className={`flex-shrink-0 me-5 w-12 h-12 flex items-center justify-center rounded-[18px] transition-all shadow-inner border border-white/5 overflow-hidden ${theme === 'dark' ? 'bg-[#1a2333]/60 group-hover:bg-brand-emerald/20 group-hover:border-brand-emerald/30 text-brand-emerald' : 'bg-slate-50 group-hover:bg-slate-100 text-brand-emerald'}`}>
                          <div className="flex items-center justify-center w-full h-full">
                            {getWAIcon(link.id)}
                          </div>
                       </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {!isWAExpanded && (
              <motion.div 
                key="wa-cta-main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsWAExpanded(true)}
                className={`group py-8 text-center rounded-[28px] border-2 border-dashed transition-all cursor-pointer ${theme === 'dark' ? 'border-brand-emerald/20 bg-brand-emerald/[0.02] hover:bg-brand-emerald/[0.05] hover:border-brand-emerald/40' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-brand-emerald/30'}`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-emerald/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
                    <div className={`p-4 rounded-[18px] transition-all shadow-xl group-hover:scale-110 ${theme === 'dark' ? 'bg-brand-emerald text-[#050810]' : 'bg-brand-emerald text-white'}`}>
                      <MessageCircle className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className={`text-[13px] font-black uppercase italic ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                      {lang === 'ar' ? 'مجموعات الواتساب (11 مجموعة)' : 'WhatsApp Groups (11 Groups)'}
                    </h3>
                    <p className="text-[8px] font-bold opacity-30 uppercase tracking-[0.15em] px-8">
                      {lang === 'ar' ? 'انقر هنا لعرض القائمة بالكامل' : 'CLICK TO VIEW FULL LIST'}
                    </p>
                  </div>
                  <div className="mt-1 px-6 py-2.5 bg-brand-emerald text-white rounded-lg font-black text-[10px] uppercase italic tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-emerald/30">
                    {t.waMainBtn}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-20 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2 opacity-10">
              <p className="text-[9px] font-black uppercase tracking-[0.6em]">{lang === 'ar' ? 'عالم الإنجاز' : 'WORLD OF ACHIEVEMENT'}</p>
              <div className="h-0.5 w-12 bg-current rounded-full"></div>
            </div>
            <p className="text-[8px] font-bold opacity-5 uppercase tracking-[0.4em]">{lang === 'ar' ? 'تصميم وتطوير بواسطة AAO' : 'DESIGN & DEV BY AAO'}</p>
        </footer>
      </main>
    </div>
  );
}
