import { Breadcrumb } from '@/components/breadcrumb'
import { Contact } from '@/components/contact'
import { Container } from '@/components/container'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Container>
        <Breadcrumb
          base='blog'
          url='/blog'
          // @ts-ignore
          current={children.props.childPropSegment}
        />

        {children}
      </Container>

      <Contact />
    </div>
  )
}
