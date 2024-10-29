import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/use-language'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const languages = [
  {
    value: 'en',
    src: '/flags/en.webp',
  },
  {
    value: 'cs',
    src: '/flags/cs.webp',
  },
]

const LanguageSelector = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const { language, imgSrc, setLanguage } = useLanguage((state) => state)

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const lang = searchParams.get('lang')
    if (lang && lang !== language) {
      setLanguage(lang)
    }
  }, [])

  useEffect(() => {
    const currentLang = searchParams.get('lang')
    if (currentLang !== language) {
      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.set('lang', language)
      router.replace(`${pathname}?${newSearchParams.toString()}`)
    }
  }, [language, pathname, searchParams, router])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className='hover:bg-zinc-600/70'>
        <Button
          variant='outline'
          role='combobox'
          name='language selector'
          aria-expanded={open}
          className='w-[70px] justify-between border-none bg-transparent text-zinc-200 hover:text-zinc-300'
        >
          <Image
            src={imgSrc(language)}
            width={30}
            height={30}
            alt={language}
            className='rounded-sm'
          />
          <ChevronsUpDown className='my-2 ml-1 h-4 w-4 shrink-0 opacity-70' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='z-[1001] w-[100px] border-zinc-500/40 bg-zinc-900 p-2 backdrop-blur-lg'>
        <Command className='!bg-transparent'>
          <CommandGroup className='space-y-2'>
            {languages.map(({ src, value }: { src: string; value: string }) => (
              <CommandItem
                key={value}
                onSelect={() => {
                  setLanguage(value)
                  setOpen(false)
                }}
                className='mb-2 !bg-transparent hover:!bg-zinc-400/20'
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4 text-zinc-100',
                    language === value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                <Image
                  src={src}
                  width={30}
                  height={30}
                  alt={value}
                  className='rounded-sm'
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default LanguageSelector
