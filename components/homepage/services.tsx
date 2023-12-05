'use client'

import { useLanguage } from '@/store/useLanguage'
import { Container } from '../container'
import { ServiceCard } from './service-card'
import { Title } from '../title'
import { SeeAll } from './see-all'

export const Services = () => {
  const { language } = useLanguage()

  return (
    <Container className='pb-20 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Services' : 'Služby'} />

      <div className='grid lg:grid-cols-3 gap-8'>
        <ServiceCard
          title='Eshop Creation'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tempore neque soluta quidem, delectus corrupti impedit sint quos iusto commodi? Iusto ullam natus officiis quos necessitatibus quae rem earum corporis modi mollitia consectetur nihil error, dolor fugit. Omnis excepturi architecto, ex, odit illum perspiciatis illo doloremque maxime obcaecati.'
        />
        <ServiceCard
          title='Web Development'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tempore neque soluta quidem, delectus corrupti impedit sint quos iusto commodi? Iusto ullam natus officiis quos necessitatibus quae rem earum corporis modi mollitia consectetur nihil error, dolor fugit. Omnis excepturi architecto, ex, odit illum perspiciatis illo doloremque maxime obcaecati.'
          highlight
        />
        <ServiceCard
          title='Management'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tempore neque soluta quidem, delectus corrupti impedit sint quos iusto commodi? Iusto ullam natus officiis quos necessitatibus quae rem earum corporis modi mollitia consectetur nihil error, dolor fugit. Omnis excepturi architecto, ex, odit illum perspiciatis illo doloremque maxime obcaecati.'
        />
      </div>

      <div className='flex justify-center mt-10'>
        <SeeAll href='/services' />
      </div>
    </Container>
  )
}
