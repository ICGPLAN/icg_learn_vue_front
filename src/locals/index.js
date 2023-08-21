import { createI18n } from 'vue-i18n'
import zh from './zh'
import ja from './ja'
import en from './en'

const messages = {
  zh,
  ja,
  en,
}
// ブラウザの言語を取得する
const language = (navigator.language || 'ja').toLocaleLowerCase();
const defaultLocale = localStorage.getItem('lang') || language.split('-')[0] || 'ja';

const i18n = createI18n({
  // キャッシュより言語設定を取得し、取得できない場合、ブラウザの言語を使う
  locale: defaultLocale,
  // 予備言語設定
  fallbackLocale: 'ja',
  messages,
});

localStorage.setItem('lang', language);

export default i18n