import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 xl:mb-10 uppercase py-2'>
        {children}
      </h1>
    ),
    p: ({ children }) => (
      <p className='md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300'>
        {children}
      </p>
    ),
    img: props => <img className='mx-auto' {...props} />,
    ...components,
  }
}
