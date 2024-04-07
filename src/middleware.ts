import createMiddleware from 'next-intl/middleware';
import { locales } from '@/i18n/locales';
import { localePrefix, pathnames } from '@/navigation';

export default createMiddleware({
  locales,
  pathnames,
  localePrefix,
  defaultLocale: locales[0],
});

export const config = {
  matcher: ['/', '/(en|es)/:path*'],
};
