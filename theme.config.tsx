import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from './components/mdx/MDXComponents'

const config: DocsThemeConfig = {
  logo: <span>Prioris</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/PSkinnerTech',
  footer: {
    text: 'PSkinnerTech',
  },
  components: MDXComponents
}

export default config
