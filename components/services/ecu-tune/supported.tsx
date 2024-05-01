'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'

interface AccordionContentItemProps {
  label: string
  year: string
}

const AccordionContentItem = ({ label, year }: AccordionContentItemProps) => {
  return (
    <div>
      <h4 className='text-sm'>{label}</h4>
      <p className='text-xs text-muted-foreground'>{year}</p>
    </div>
  )
}

export const Supported = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <Title
        label={language === 'en' ? 'Supported Cars' : 'Podporovaná vozidla'}
      />
      <div className='grid lg:grid-cols-3 gap-4 lg:gap-8'>
        <Accordion type='multiple'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='bmw'>
              <AccordionTrigger className='text-xl'>BMW</AccordionTrigger>
              <AccordionContent>
                <Accordion type='multiple' className='space-y-4'>
                  <AccordionItem value='1 series'>
                    <AccordionTrigger className='text-lg'>
                      1 Series
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem
                        label='E81, E82, E87, E88'
                        year='2004-2007'
                      />
                      <AccordionContentItem
                        label='E81, E82, E87, E88'
                        year='2008-2013'
                      />
                      <AccordionContentItem label='F20, F21' year='2011-2019' />
                      <AccordionContentItem label='F40' year='2019+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='2 series'>
                    <AccordionTrigger className='text-lg'>
                      2 Series
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem
                        label='F22, F23, F87'
                        year='2013+'
                      />
                      <AccordionContentItem label='F44' year='2020+' />
                      <AccordionContentItem label='F45' year='2014-2021' />
                      <AccordionContentItem label='F46' year='2015+' />
                      <AccordionContentItem label='G42, G87' year='2021+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='3 series'>
                    <AccordionTrigger className='text-lg'>
                      3 Series
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem
                        label='E90, E91, E92, E93'
                        year='2005-2007'
                      />
                      <AccordionContentItem
                        label='E90, E91, E92, E93'
                        year='2008-2013'
                      />
                      <AccordionContentItem
                        label='F30, F31, F34, F35, F90'
                        year='2011-2019'
                      />
                      <AccordionContentItem
                        label='G20, G21, G80'
                        year='2019+'
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='4 series'>
                    <AccordionTrigger className='text-lg'>
                      4 Series
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem
                        label='F32, F33, G26, G82, G83'
                        year='2013+'
                      />
                      <AccordionContentItem
                        label='G22, G23, G26, G82, G83'
                        year='2020+'
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='5 series'>
                    <AccordionTrigger className='text-lg'>
                      5 Series
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='E60, E61' year='2003-2007' />
                      <AccordionContentItem label='E60, E61' year='2008-2010' />
                      <AccordionContentItem
                        label='F07, F10, F11, F18'
                        year='2010-2017'
                      />
                      <AccordionContentItem
                        label='G30, G31, F90'
                        year='2017+'
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='6 series'>
                    <AccordionTrigger className='text-lg'>
                      6 Series
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='E63, E64' year='2003-2007' />
                      <AccordionContentItem label='E63, E64' year='2008-2010' />
                      <AccordionContentItem
                        label='F06, F12, F13'
                        year='2011-2018'
                      />
                      <AccordionContentItem label='G32' year='2017+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='7 series'>
                    <AccordionTrigger className='text-lg'>
                      7 Series
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem
                        label='E65, E66, E67, E68'
                        year='2001-2008'
                      />
                      <AccordionContentItem
                        label='F01, F02, F03, F04'
                        year='2008-2015'
                      />
                      <AccordionContentItem label='G11, G12' year='2015-2022' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='8 series'>
                    <AccordionTrigger className='text-lg'>
                      8 Series
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem
                        label='G14, G15, G16, F91, F92'
                        year='2018+'
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='x1'>
                    <AccordionTrigger className='text-lg'>X1</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='E84' year='2009-2015' />
                      <AccordionContentItem label='F48' year='2015-2022' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='x2'>
                    <AccordionTrigger className='text-lg'>X2</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='F39' year='2018+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='x3'>
                    <AccordionTrigger className='text-lg'>X3</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='E83' year='2003-2010' />
                      <AccordionContentItem label='F25' year='2010-2017' />
                      <AccordionContentItem label='G01, F97' year='2017+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='x4'>
                    <AccordionTrigger className='text-lg'>X4</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='F26' year='2014-2018' />
                      <AccordionContentItem label='G02, F98' year='2018+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='x5'>
                    <AccordionTrigger className='text-lg'>X5</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='E70' year='2006-2007' />
                      <AccordionContentItem label='E70' year='2008-2013' />
                      <AccordionContentItem label='F15, F85' year='2013-2018' />
                      <AccordionContentItem
                        label='G05, F95 (PRE-LCI)'
                        year='2018-2023'
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='x6'>
                    <AccordionTrigger className='text-lg'>X6</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='E71, E72' year='2008-2014' />
                      <AccordionContentItem label='F16, F85' year='2014-2019' />
                      <AccordionContentItem
                        label='G06, F96 (PRE-LCI)'
                        year='2019-2023'
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='x7'>
                    <AccordionTrigger className='text-lg'>X7</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem
                        label='G07 (PRE-LCI)'
                        year='2019-2022'
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='z4'>
                    <AccordionTrigger className='text-lg'>Z4</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='E85' year='2002-2008' />
                      <AccordionContentItem label='E89' year='2009-2016' />
                      <AccordionContentItem label='G29' year='2018+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='i3'>
                    <AccordionTrigger className='text-lg'>i3</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='I01' year='2013+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='i4'>
                    <AccordionTrigger className='text-lg'>i4</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='G26E' year='2021+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='i8'>
                    <AccordionTrigger className='text-lg'>i8</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='I12, I15' year='2013+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='iX3'>
                    <AccordionTrigger className='text-lg'>iX3</AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='G08' year='2021+' />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
        <Accordion type='multiple'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='mini'>
              <AccordionTrigger className='text-xl'>MINI</AccordionTrigger>
              <AccordionContent>
                <Accordion type='multiple' className='space-y-4'>
                  <AccordionItem value='cooper'>
                    <AccordionTrigger className='text-lg'>
                      Cooper
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='R50, R53' year='2001-2006' />
                      <AccordionContentItem label='R56' year='2006-2007' />
                      <AccordionContentItem label='R56' year='2008-2014' />
                      <AccordionContentItem label='F55, F56' year='2014+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='convertible'>
                    <AccordionTrigger className='text-lg'>
                      Convertible
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='R52' year='2004-2008' />
                      <AccordionContentItem label='R57' year='2009-2015' />
                      <AccordionContentItem label='F57' year='2016+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='coupe'>
                    <AccordionTrigger className='text-lg'>
                      Coupe
                    </AccordionTrigger>
                    <AccordionContent>
                      <AccordionContentItem label='R58' year='2011+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='roadster'>
                    <AccordionTrigger className='text-lg'>
                      Roadster
                    </AccordionTrigger>
                    <AccordionContent>
                      <AccordionContentItem label='R59' year='2011+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='countryman'>
                    <AccordionTrigger className='text-lg'>
                      Countryman
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='R60' year='2010-2017' />
                      <AccordionContentItem label='F60' year='2018+' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='paceman'>
                    <AccordionTrigger className='text-lg'>
                      Paceman
                    </AccordionTrigger>
                    <AccordionContent>
                      <AccordionContentItem label='R61' year='2013-2016' />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='clubman'>
                    <AccordionTrigger className='text-lg'>
                      Clubman
                    </AccordionTrigger>
                    <AccordionContent className='space-y-6'>
                      <AccordionContentItem label='R55' year='2007-2014' />
                      <AccordionContentItem label='F54' year='2015+' />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
        <Accordion type='multiple'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='toyota'>
              <AccordionTrigger className='text-xl'>Toyota</AccordionTrigger>
              <AccordionContent>
                <Accordion type='multiple' className='space-y-4'>
                  <AccordionItem value='supra'>
                    <AccordionTrigger className='text-lg'>
                      Supra
                    </AccordionTrigger>
                    <AccordionContent>
                      <AccordionContentItem label='J29, A90' year='2019+' />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </div>
    </Container>
  )
}
