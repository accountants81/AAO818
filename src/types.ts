export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

export interface PortalLink {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  url: string;
  type: 'whatsapp' | 'tool' | 'file';
  color?: string;
  icon?: string;
}
