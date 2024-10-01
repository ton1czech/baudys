import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='mb-6 py-2 text-4xl font-bold uppercase md:text-5xl lg:text-6xl xl:mb-10 xl:text-7xl'>
        {children}
      </h1>
    ),
    p: ({ children }) => (
      <p className='text-zinc-300 md:text-lg lg:text-xl'>{children}</p>
    ),
    img: (props) => <img className='mx-auto' {...props} />,
    ...components,
  }
}
