import { PortalLink } from './types';

export const LOGO_URL = 'https://i.postimg.cc/90Fk7xWM/file-00000000a0a8720a9966c1a51cd32381.png';

export const WHATSAPP_LINKS: PortalLink[] = [
  {
    id: 'wa-1',
    title: { ar: 'خزينة الأموال (مالية - مصاريف وتحويش)', en: 'Money Vault' },
    description: { ar: 'إدارة المالية والمصاريف والادخار', en: 'Manage finances, expenses, and savings' },
    url: 'https://chat.whatsapp.com/DpXUsrnAKZTDiQJnSfG7Uq',
    type: 'whatsapp'
  },
  {
    id: 'wa-2',
    title: { ar: 'صديق رحلتي (تخطيط سنوي وأهداف)', en: 'Journey Friend' },
    description: { ar: 'التخطيط السنوي ومتابعة الأهداف', en: 'Annual planning and goal tracking' },
    url: 'https://chat.whatsapp.com/IPN7Z98OFiXLY4dB1Ll117',
    type: 'whatsapp'
  },
  {
    id: 'wa-3',
    title: { ar: 'جلسة مع النفس (تدوين وفضفضة)', en: 'Self Session' },
    description: { ar: 'التدوين اليومي والتفريغ النفسي', en: 'Daily journaling and venting' },
    url: 'https://chat.whatsapp.com/DX3w64nQJaLDJCsvGJ0jfX',
    type: 'whatsapp'
  },
  {
    id: 'wa-4',
    title: { ar: 'مصاحب (متابعة حفظ القرآن)', en: 'Companion' },
    description: { ar: 'متابعة حفظ ومراجعة القرآن الكريم', en: 'Track Quran memorization' },
    url: 'https://chat.whatsapp.com/HrgAcyAemNk5NKCnlfWJQ5',
    type: 'whatsapp'
  },
  {
    id: 'wa-5',
    title: { ar: 'رفيقك في التغير (متابعة عبادات)', en: 'Change Refeeq' },
    description: { ar: 'متابعة العبادات والطاعات اليومية', en: 'Track daily worship and deeds' },
    url: 'https://chat.whatsapp.com/DeycvDQ0CjKHNBwiRw3AHB',
    type: 'whatsapp'
  },
  {
    id: 'wa-6',
    title: { ar: 'فورمة البيت (تسجيل تمارين رياضية)', en: 'Home Fitness' },
    description: { ar: 'تسجيل التمارين والنشاط البدني', en: 'Record exercises and physical activity' },
    url: 'https://chat.whatsapp.com/HHscMK84fxn96MrpBP0FbE',
    type: 'whatsapp'
  },
  {
    id: 'wa-7',
    title: { ar: 'سلم الصعود (كورسات ودراسة)', en: 'Climbing Ladder' },
    description: { ar: 'متابعة الكورسات والتقدم الدراسي', en: 'Track courses and study progress' },
    url: 'https://chat.whatsapp.com/J6usWJXRuiO3vlXKl1oBwi',
    type: 'whatsapp'
  },
  {
    id: 'wa-8',
    title: { ar: 'المكتبة (جرد كتب وقراءات)', en: 'Library' },
    description: { ar: 'جرد الكتب ومتابعة القراءات', en: 'Book inventory and reading log' },
    url: 'https://chat.whatsapp.com/E6P2qkfevIp5Xh3lWoT7iE',
    type: 'whatsapp'
  },
  {
    id: 'wa-9',
    title: { ar: 'اثر (أهداف عامة وجوائز)', en: 'Impact (Ethar)' },
    description: { ar: 'الأهداف العامة ونظام التحفيز', en: 'General goals and rewards' },
    url: 'https://chat.whatsapp.com/ImUrzAS41o86k9vBbtI7zN',
    type: 'whatsapp'
  },
  {
    id: 'wa-10',
    title: { ar: 'ترتيبات حياتي', en: 'Life Arrangements' },
    description: { ar: 'تنظيم شؤون الحياة اليومية', en: 'Organizing daily life affairs' },
    url: 'https://chat.whatsapp.com/FPPklpCllQiE8fqbOdJaQR',
    type: 'whatsapp'
  },
  {
    id: 'wa-11',
    title: { ar: 'نجاتك بيدك', en: 'Najatoka Beyadek' },
    description: { ar: 'الرابط الرئيسي لمبادرة نجاتك بيدك', en: 'Main link for the initiative' },
    url: 'https://chat.whatsapp.com/E77lWOn1oSfDescB2H5DLf',
    type: 'whatsapp'
  }
];

export const TOOLS_LINKS: PortalLink[] = [
  {
    id: 'tool-2',
    title: { ar: 'ملف المخططات (Excel)', en: 'Charts File (Excel)' },
    description: { ar: 'تحميل المخططات والميزانيات المركزية', en: 'Download central charts and budgets' },
    url: 'https://docs.google.com/spreadsheets/d/11I7eD9ehCos2amQSHJbc_ZGXdNgEAo-8/edit?usp=drivesdk&ouid=117083237204084925727&rtpof=true&sd=true',
    type: 'file',
    color: 'bg-brand-emerald'
  },
  {
    id: 'tool-4',
    title: { ar: 'جميع المخططات', en: 'All Charts' },
    description: { ar: 'الرابط المباشر لكل ملفات MasAR', en: 'Direct link to all MasAR files' },
    url: 'https://hjgh20667.vercel.app/',
    type: 'tool',
    color: 'bg-indigo-500'
  },
  {
    id: 'tool-1',
    title: { ar: 'موقع نجاتك بيدك', en: 'Najatoka Website' },
    description: { ar: 'الرابط الرسمي للخدمات والدعم', en: 'Official services and support link' },
    url: 'https://in-your-hands.vercel.app/',
    type: 'tool',
    color: 'bg-brand-accent'
  },
  {
    id: 'tool-3',
    title: { ar: 'رفع الصور المستندات', en: 'Upload Images & Docs' },
    description: { ar: 'مركز الرفع السريع للمستندات', en: 'Quick document upload center' },
    url: 'https://postimages.org/',
    type: 'tool',
    color: 'bg-amber-500'
  }
];

export const TRANSLATIONS = {
  ar: {
    loginTitle: 'بوابة مسار الرقمية',
    loginSubtitle: 'دخول المشرفين المعتمدين',
    emailLabel: 'البريد الإلكتروني',
    passwordLabel: 'كلمة المرور',
    loginButton: 'دخول البوابة',
    invalidLogin: 'بيانات الدخول غير صحيحة',
    sections: {
      whatsapp: 'مجموعات التواصل المباشر',
      tools: 'الأدوات والروابط الهامة'
    },
    waMainBtn: 'عرض جميع المجموعات (11 مجموعة)',
    waMainBtnOpen: 'إخفاء المجموعات',
    greetings: {
      morning: 'AAAMO عالم',
      afternoon: 'AAAMO عالم',
      evening: 'AAAMO عالم'
    },
    days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
  },
  en: {
    loginTitle: 'Masar Digital Portal',
    loginSubtitle: 'Authorized Admin Access',
    emailLabel: 'Email Address',
    passwordLabel: 'Password',
    loginButton: 'Login to Portal',
    invalidLogin: 'Invalid credentials',
    sections: {
      whatsapp: 'Direct Communication Groups',
      tools: 'Important Tools & Links'
    },
    waMainBtn: 'View All Groups (11 Groups)',
    waMainBtnOpen: 'Hide Groups',
    greetings: {
      morning: 'AAAMO WORLD',
      afternoon: 'AAAMO WORLD',
      evening: 'AAAMO WORLD'
    },
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
};
