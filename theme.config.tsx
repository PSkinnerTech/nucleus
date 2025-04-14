import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import MDXComponents from './components/mdx/MDXComponents'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Image src="/rin1.png" alt="Rin Logo" width={32} height={32} />
      <span>Rin</span>
    </div>
  ),
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
  components: MDXComponents,
  head: (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/rin2.png" type="image/png" />
    </>
  ),
}

export default config
