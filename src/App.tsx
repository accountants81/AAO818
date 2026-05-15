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
  Image as ImageIcon,
  Clock as ClockIcon,
  LogOut,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Scale,
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

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('dark');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isWAExpanded, setIsWAExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (email === 'AAO818@gmail.com' && password === 'AAO818') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError(TRANSLATIONS[lang].invalidLogin);
    }
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(lang === 'ar' ? 'ar-EG' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    const dayName = t.days[date.getDay()];
    const dayNumber = date.getDate();
    const monthName = t.months[date.getMonth()];
    const year = date.getFullYear();
    return lang === 'ar' 
      ? `${dayName}\n${dayNumber} ${monthName}\n${year}`
      : `${dayName}, ${monthName} ${dayNumber}, ${year}`;
  };

  const getGreeting = () => {
    const hours = currentTime.getHours();
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
                <label className={`text-[10px] font-black opacity-30 px-1.5 block uppercase tracking-widest ${isRtl ? 'text-right' : 'text-left'}`}>{t.emailLabel}</label>
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className={`w-full h-14 px-12 rounded-2xl outline-none transition-all border font-bold text-sm ${theme === 'dark' ? 'bg-brand-bg border-white/5 focus:border-brand-accent/50 text-white' : 'bg-slate-50 border-slate-200 focus:border-brand-accent'}`}
                  />
                  <div className={`absolute ${isRtl ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 opacity-30`}>
                    <User className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-[10px] font-black opacity-30 px-1.5 block uppercase tracking-widest ${isRtl ? 'text-right' : 'text-left'}`}>{t.passwordLabel}</label>
                <div className="relative">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`w-full h-14 px-12 rounded-2xl outline-none transition-all border font-bold text-sm ${theme === 'dark' ? 'bg-brand-bg border-white/5 focus:border-brand-accent/50 text-white' : 'bg-slate-50 border-slate-200 focus:border-brand-accent'}`}
                  />
                   <div className={`absolute ${isRtl ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 opacity-30`}>
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
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-brand-bg text-white' : 'bg-[#f8fafc] text-slate-900'} ${isRtl ? 'rtl' : 'ltr'}`}>
      <header className="px-6 py-4 md:px-12 flex items-center justify-between sticky top-0 bg-opacity-80 backdrop-blur-xl z-50 border-b border-white/5">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-xl transition-all shadow-sm border ${theme === 'dark' ? 'bg-brand-card border-white/10 text-yellow-500' : 'bg-white border-slate-200 text-slate-600'}`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <img src={LOGO_URL} alt="Logo" className="w-12 h-12 rounded-full shadow-lg border-2 border-brand-accent/20 object-cover" />
          </div>

          <button 
            onClick={toggleLang} 
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all shadow-sm font-bold text-[10px] uppercase border ${theme === 'dark' ? 'bg-brand-card border-white/10 text-white' : 'bg-white border-slate-200 text-slate-700'}`}
          >
            <Languages className="w-3.5 h-3.5 text-brand-accent" />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20 pt-0 space-y-6">
        {/* Top Feature Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center py-1"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-accent/20 blur-[60px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
            <img 
              src={LOGO_URL} 
              alt="Center Logo" 
              className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-2xl border-4 border-white/5 object-cover relative z-10 transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </motion.div>

        {/* Welcome Greeting */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-0.5"
        >
           <h2 className="text-5xl md:text-6xl font-black tracking-[0.1em] text-brand-accent drop-shadow-[0_0_25px_rgba(59,130,246,0.2)] leading-none italic uppercase">
             {getGreeting()}
           </h2>
           <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.6em] mt-2">
             {lang === 'ar' ? 'فضاء الإنجاز اللامتناهي' : 'INFINITE ACHIEVEMENT SPACE'}
           </p>
        </motion.div>

        {/* Improved Integrated Clock Display - Pill Card Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`relative overflow-hidden rounded-[25px] shadow-2xl transition-all border ${theme === 'dark' ? 'bg-brand-card/40 border-white/10' : 'bg-white border-slate-100'}`}
        >
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-white/5">
            {/* Date Section */}
            <div className={`p-5 md:p-7 flex flex-col justify-center items-center md:items-start md:px-10 flex-1 bg-gradient-to-br from-transparent to-brand-accent/[0.02]`}>
               <p className="text-[9px] font-black text-brand-emerald uppercase tracking-[0.2em] mb-1 opacity-80">{t.days[currentTime.getDay()]}</p>
               <div className="flex items-center gap-3">
                 <span className="text-4xl md:text-5xl font-black tracking-tighter italic leading-none">{currentTime.getDate()}</span>
                 <span className="text-xl md:text-2xl font-black opacity-40 italic leading-none">{t.months[currentTime.getMonth()]}</span>
               </div>
               <p className="text-[9px] font-bold opacity-10 tracking-[0.4em] mt-2 leading-none">{currentTime.getFullYear()}</p>
            </div>

            {/* Time Section */}
            <div className="p-5 md:p-7 flex items-center justify-center bg-brand-emerald/[0.02] flex-1">
               <div className="flex items-center gap-4 relative">
                  <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'} opacity-20`}>
                    <span className="text-[11px] font-black uppercase">
                      {currentTime.getHours() >= 12 ? (lang === 'ar' ? 'مساءً' : 'PM') : (lang === 'ar' ? 'صباحاً' : 'AM')}
                    </span>
                  </div>
                  <span className={`text-6xl md:text-7xl font-black tabular-nums tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'} leading-none drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]`}>
                    {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                  </span>
                  <div className="opacity-10 tabular-nums font-black text-lg pt-4 self-end flex flex-col">
                    <span className="text-[8px] animate-pulse">●</span>
                    {currentTime.getSeconds().toString().padStart(2, '0')}
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic WhatsApp Groups */}
        <section className="space-y-2">
           <button 
            onClick={() => setIsWAExpanded(!isWAExpanded)}
            className={`w-full group relative overflow-hidden flex items-center justify-between p-4 px-6 rounded-[22px] transition-all shadow-xl border ${theme === 'dark' ? 'bg-brand-card border-white/5 hover:bg-[#1a2333]' : 'bg-white border-slate-100 hover:bg-slate-50'}`}
           >
              <div className="flex items-center gap-4">
                 <div className={`p-2.5 rounded-xl transition-all shadow-inner ${theme === 'dark' ? 'bg-[#0b0f1a]' : 'bg-slate-100'} group-hover:scale-105`}>
                    <MessageCircle className="w-5 h-5 text-brand-emerald" />
                 </div>
                 <div className={isRtl ? 'text-right' : 'text-left'}>
                    <h2 className="text-sm font-black tracking-tight">{t.sections.whatsapp}</h2>
                    <p className={`text-[9px] font-bold transition-colors ${isWAExpanded ? 'text-brand-accent' : 'opacity-30'}`}>{isWAExpanded ? t.waMainBtnOpen : t.waMainBtn}</p>
                 </div>
              </div>
              <motion.div animate={{ rotate: isWAExpanded ? 180 : 0 }} className="p-2 bg-white/5 rounded-full">
                <ChevronDown className="w-4 h-4 opacity-30" />
              </motion.div>
           </button>
           
           <AnimatePresence>
             {isWAExpanded && (
               <motion.div 
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: 'auto', opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                className="overflow-hidden"
               >
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 p-1">
                    {WHATSAPP_LINKS.map((link, idx) => (
                      <motion.a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.02 }}
                        className={`group flex items-center gap-4 p-4 rounded-[20px] border transition-all hover:scale-[1.02] active:scale-95 shadow-lg ${theme === 'dark' ? 'bg-[#1e293b] border-white/5 hover:border-brand-emerald/50' : 'bg-white border-slate-200 hover:border-brand-accent/30'}`}
                      >
                         <div className={`p-3.5 rounded-xl transition-colors ${theme === 'dark' ? 'bg-[#0b0f1a]' : 'bg-slate-50'} group-hover:bg-brand-emerald/10`}>
                            {getWAIcon(link.id)}
                         </div>
                         <div className="flex-1 min-w-0">
                            <h3 className="font-black text-[12px] tracking-tight mb-0.5 truncate">{link.title[lang]}</h3>
                            <p className="text-[9px] font-bold opacity-30 truncate">{link.description[lang]}</p>
                         </div>
                         <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="w-3.5 h-3.5 text-brand-emerald" />
                         </div>
                      </motion.a>
                    ))}
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
        </section>

        {/* Tools Section - Refined sizes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
             {TOOLS_LINKS.map((link, idx) => (
               <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * idx }}
                className={`group relative overflow-hidden flex items-center p-4 md:p-5 rounded-[24px] transition-all border shadow-lg ${theme === 'dark' ? 'bg-brand-card border-white/5 hover:bg-[#1a2333]' : 'bg-white border-slate-100 hover:bg-slate-50'}`}
               >
                 <div className={`p-3.5 rounded-xl transition-all group-hover:scale-105 shadow-inner ${isRtl ? 'ml-4' : 'mr-4'} ${theme === 'dark' ? 'bg-[#0b0f1a]' : 'bg-slate-100'}`}>
                    {link.type === 'file' ? <FileText className="w-5 h-5 text-purple-400" /> : link.type === 'tool' && link.id === 'tool-3' ? <ImageIcon className="w-5 h-5 text-amber-500" /> : <ChevronRight className={`w-5 h-5 text-brand-accent ${isRtl ? 'rotate-180' : ''}`} />}
                 </div>
                 <div className="flex-1 min-w-0">
                    <h3 className="font-black text-[13px] md:text-[14px] tracking-tight truncate leading-tight uppercase italic">{link.title[lang]}</h3>
                    <p className="text-[10px] font-bold opacity-30 truncate">{link.description[lang]}</p>
                 </div>
                 <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-20 transition-opacity" />
               </motion.a>
             ))}
        </section>

        {/* Footer */}
        <footer className="pt-20 pb-10 flex flex-col items-center">
            <button 
              onClick={() => setIsLoggedIn(false)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black transition-all shadow-xl hover:shadow-rose-500/20 active:scale-95 ${theme === 'dark' ? 'bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white' : 'bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white'}`}
            >
               <LogOut className="w-4 h-4" />
               <span>{lang === 'ar' ? 'خروج آمن' : 'Secure Logout'}</span>
            </button>
        </footer>
      </main>
    </div>
  );
}
