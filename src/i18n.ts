import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, TLocal } from '@/i18n/locales';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as TLocal)) notFound();

  return {
    messages: (await import(`@/i18n/${locale}.json`)).default,
  };
});
