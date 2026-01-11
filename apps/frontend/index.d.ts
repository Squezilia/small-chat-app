import type { Tab } from '~/components/navigation/Navigation.vue';

declare module 'nuxt/schema' {
  interface AppConfig {
    navigation: Tab;
    emailRegex: RegExp;
    passwordRegex: RegExp;
    nameRegex: RegExp;
  }

  interface AppConfigInput {
    navigation: Tab;
    emailRegex: RegExp;
    passwordRegex: RegExp;
    nameRegex: RegExp;
  }
}
