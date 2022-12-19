import { createSSRApp } from 'vue';

import { Button, Toast } from 'vant';
import { loading, hiddenHeader } from '@/utils/uniApi';
import App from './App.vue';
export function createApp() {
  const app = createSSRApp(App);
  app.use(Button).use(Toast);
  app.provide('toast', Toast);
  app.provide('uloading', loading);
  app.provide('hiddenHeader', hiddenHeader);

  return {
    app,
  };
}
