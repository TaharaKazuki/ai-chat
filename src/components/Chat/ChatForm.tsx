import { useForm } from 'react-hook-form';

import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

const ChatForm = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="prompt"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </Form>
  );
};

export default ChatForm;
