'use client';

import { useState } from 'react';
import { useRouter } from '@/navigation';
import { toast } from 'sonner';
import { ProductsResponse } from '@/pb/types';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createCustomer } from './actions';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

type Props = {
  products: ProductsResponse<unknown>[];
};

export default function CreateCustomerForm(props: Props) {
  const [pending, setPending] = useState(false);

  const router = useRouter();
  const t = useTranslations('form');

  const schema = z.object({
    name: z
      .string({
        invalid_type_error: t('name_invalid'),
        required_error: t('name_required'),
      })
      .min(1, {
        message: t('name_required'),
      }),
    email: z
      .string({
        invalid_type_error: t('email_invalid'),
        required_error: t('email_required'),
      })
      .min(1, {
        message: t('email_required'),
      })
      .email({
        message: t('email_invalid'),
      }),
    products: z
      .string({
        invalid_type_error: t('product_invalid'),
        required_error: t('product_required'),
      })
      .min(1, {
        message: t('product_required'),
      }),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      products: '',
    },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    setPending(true);

    const res = await createCustomer(values);

    if (res.ok) {
      toast.success(t('success'));
      form.reset();
      router.refresh();
    } else if (!res.ok) {
      toast.error(t('error'));
    }

    setPending(false);
  }

  return (
    <Form {...form}>
      <form
        className='max-w-[300px] space-y-4 mt-8'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className='text-2xl font-semibold'>{t('create_customer')}</h2>
        <FormField
          name='name'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('name')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='email'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='products'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('product')}</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t('select_product')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {props.products &&
                    props.products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit' disabled={pending}>
          {pending ? t('submitting') : t('submit')}
        </Button>
      </form>
    </Form>
  );
}
