import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from 'next-intl/navigation';
import { locales } from '@/i18n/locales';

export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/dashboard': {
    en: '/dashboard',
    es: '/tablero',
  },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames, localePrefix });
