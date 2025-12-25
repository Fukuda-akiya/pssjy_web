import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://github.com',
  base: 'pssjy_web',
    i18n: {
    defaultLocale: 'jp',
    locales: ['jp', 'en'],
    routing: {
      prefixDefaultLocale: false, // デフォルト(日本)はURLに/jp/を付けない設定
    },
  },
});
