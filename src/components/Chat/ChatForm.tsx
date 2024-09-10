'use client';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

const ChatForm = () => {
  const form = useForm();

  const onSubmit = () => {};

  return (
    <div className="bg-white p-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full flex-1">
                  <FormControl>
                    <Textarea {...field} className="bg-slate-200" rows={1} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button variant="ghost">
              <Send />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ChatForm;
