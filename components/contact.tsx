'use client'

import { useLanguage } from '@/store/use-language'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { Container } from './container'
import { Title } from './title'
import { Textarea } from './ui/textarea'
import { useCursor } from '@/store/use-cursor'
import { Phone } from 'lucide-react'

export const Contact = () => {
  const { language } = useLanguage(state => state)
  const { setIsNotHovering, setIsHovering } = useCursor()

  const schema = z.object({
    name: z.string().min(1, {
      message: language === 'en' ? 'Name is required' : 'Jméno je povinné',
    }),
    email: z.string().email({
      message: language === 'en' ? 'Not a valid email' : 'Neplatný email',
    }),
    message: z.string().min(1, {
      message: language === 'en' ? 'Message is required' : 'Zpráva je povinná',
    }),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    try {
      const emailResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_PUBLIC_API!
      )

      console.log(emailResponse)

      toast.success(
        language === 'en' ? 'Sent Successfully.' : 'Úspěšně odesláno.'
      )
    } catch (error) {
      console.log('Error sending email:', error)

      toast.error(
        language === 'en'
          ? 'Something went wrong, please try again later.'
          : 'Něco se pokazilo, zkuste to prosím později.'
      )
    } finally {
      form.reset()
    }
  }

  return (
    <Container>
      <Title
        label={language === 'en' ? "let's work together" : 'spolupracujme'}
      />

      <motion.img
        src='/contact/contact.webp'
        alt='contact me'
        className='w-full max-w-[70ch] mx-auto rounded-2xl mb-10'
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-5 max-w-[70ch] mx-auto'
        >
          <FormField
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label>
                      {language === 'en' && 'Name *'}
                      {language === 'cs' && 'Jméno *'}
                    </Label>
                    <Input
                      onMouseEnter={setIsHovering}
                      onMouseLeave={setIsNotHovering}
                      placeholder='John Doe'
                      {...field}
                      className='border-zinc-400 dark:border-zinc-700'
                    />
                  </motion.div>
                </FormControl>
                <FormMessage className='text-red-600' />
              </FormItem>
            )}
          />
          <FormField
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label>Email *</Label>
                    <Input
                      onMouseEnter={setIsHovering}
                      onMouseLeave={setIsNotHovering}
                      placeholder='johndoe@gmail.com'
                      {...field}
                      className='border-zinc-400 dark:border-zinc-700'
                    />
                  </motion.div>
                </FormControl>
                <FormMessage className='text-red-600' />
              </FormItem>
            )}
          />
          <FormField
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label>
                      {language === 'en' && 'Message *'}
                      {language === 'cs' && 'Zpráva *'}
                    </Label>
                    <Textarea
                      onMouseEnter={setIsHovering}
                      onMouseLeave={setIsNotHovering}
                      placeholder={
                        language === 'en'
                          ? 'Write your message...'
                          : 'Napištou svou zprávu...'
                      }
                      {...field}
                      className='border-zinc-400 dark:border-zinc-700'
                    />
                  </motion.div>
                </FormControl>
                <FormMessage className='text-red-600' />
              </FormItem>
            )}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              type='submit'
              variant='rainbow'
              className='mt-1 w-full'
              onMouseEnter={setIsHovering}
              onMouseLeave={setIsNotHovering}
            >
              {language === 'en' && 'Submit'}
              {language === 'cs' && 'Odeslat'}
            </Button>
          </motion.div>
        </form>
      </Form>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='flex items-center gap-2 my-8 md:my-12 lg:my-16 xl:my-20 max-w-[70ch] mx-auto'
      >
        <span className='w-full h-px bg-muted-foreground/60 dark:bg-muted-foreground/30' />
        <p className='text-muted-foreground'>
          {language === 'en' && 'OR'}
          {language === 'cs' && 'NEBO'}
        </p>
        <span className='w-full h-px bg-muted-foreground/60 dark:bg-muted-foreground/30' />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='flex gap-2 items-center flex-nowrap text-lg md:text-xl text-center mx-auto justify-center'
      >
        <Phone className='w-4 h-4' />
        {language === 'en' && 'Call me on '}
        {language === 'cs' && 'Zavolejte na '}
        <a
          href='tel:+420777530096'
          className='font-bold text-purple-500 after:w-full after:h-[3px] after:bg-purple-500 after:-bottom-1 after:left-0 after:right-0 after:z-10 after:absolute relative after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:rounded-lg'
          onMouseEnter={setIsHovering}
          onMouseLeave={setIsNotHovering}
        >
          +420 777 530 096
        </a>
      </motion.p>
    </Container>
  )
}
