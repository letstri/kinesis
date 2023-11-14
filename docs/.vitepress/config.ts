import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue Kinesis',
  description: 'Easy creation of complex interactive animation using Vue 3',
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/installation' },
    ],
    editLink: {
      pattern: 'https://github.com/letstri/vue-kinesis/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    sidebar: [
      {
        text: 'Get Started',
        items: [{ text: 'Installation', link: '/installation' }],
      },
      {
        text: 'Components',
        items: [
          { text: 'KinesisContainer', link: '/components/container' },
          { text: 'KinesisElement', link: '/components/element' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/letstri/vue-kinesis' }],
  },
});
