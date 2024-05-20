import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className='text-5xl font-bold'>{children}</h1>,
    ...components,
  }
}
