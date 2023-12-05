'use client'

import { useLanguage } from '@/store/useLanguage'
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
import { useCursor } from '@/store/useCursor'

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
    <div className=''>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Container>
          <Title
            label={language === 'en' ? "let's work together" : 'spolupracujme'}
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
                      <>
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
                      </>
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
                      <>
                        <Label>Email *</Label>
                        <Input
                          onMouseEnter={setIsHovering}
                          onMouseLeave={setIsNotHovering}
                          placeholder='johndoe@gmail.com'
                          {...field}
                          className='border-zinc-400 dark:border-zinc-700'
                        />
                      </>
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
                      <>
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
                      </>
                    </FormControl>
                    <FormMessage className='text-red-600' />
                  </FormItem>
                )}
              />

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
            </form>
          </Form>
        </Container>
      </motion.div>
    </div>
  )
}
