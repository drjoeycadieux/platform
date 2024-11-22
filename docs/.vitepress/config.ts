import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Techtack-Technologies',
  description: 'The most advanced platform for developers',

  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/getting-started' },
      { text: 'Config', link: '/config/introduction' },
      { text: 'Blog', link: '/blog' },
      { text: 'Login', link: '/login' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting Started', link: '/documentation/getting-started' },
          { text: 'Installation', link: '/documentation/installation' }
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Introduction', link: '/config/introduction' },
          { text: 'Basic Setup', link: '/config/basic-setup' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/drjoeycadieux' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Techtack Technologies'
    }
  }
})