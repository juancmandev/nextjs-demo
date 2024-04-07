'use client';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <html lang='en'>
      <body>
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold'>Error 404: Page not found</h1>
          <Button asChild className='mt-5'>
            <a href='/'>Go to home</a>
          </Button>
        </div>
      </body>
    </html>
  );
}
