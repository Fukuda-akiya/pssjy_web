import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp', 'en'],
    routing: {
      prefixDefaultLocale: false, // デフォルト(日本)はURLに/jp/を付けない設定
    },
  },
});
