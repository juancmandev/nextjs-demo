import { TLocal } from '@/i18n/locales';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Demo',
  description: 'Project showcasing Next.js capabilities.',
};

type Props = {
  children: React.ReactNode;
  params: { locale: TLocal };
};

export default function RootLayout(props: Props) {
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body>
        <NextTopLoader showSpinner={false} />
        <NextIntlClientProvider
          messages={messages}
          locale={props.params.locale}
        >
          <Sidebar />
          <Header />
          <main className='pl-20 pt-20'>{props.children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
