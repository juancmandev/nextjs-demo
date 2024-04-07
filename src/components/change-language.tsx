'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useLocale, useTranslations } from 'next-intl';
import { TLocal, locales } from '@/i18n/locales';
import { Globe } from 'lucide-react';
import { usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation';

export default function ChangeLanguage() {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();

  function handleClick(href: string, locale: TLocal) {
    router.replace(
      {
        params,
        pathname: href as any,
      },
      { locale },
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' className='space-x-1'>
          <Globe className='w-5' />
          <span>{t(`languages.${locale}`)}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-max'>
        <h1 className='text-lg font-semibold mb-2'>{t('languages.label')}</h1>
        <ul>
          {locales.map((locale) => (
            <li key={locale}>
              <Button
                variant='ghost'
                onClick={() => handleClick(pathname, locale)}
                className='w-full text-left flex justify-start'
              >
                {t(`languages.${locale}`)}
              </Button>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
