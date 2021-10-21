import { createApp } from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';

createApp(App).mount('#app');

const fn: (str: string) => void = function (str: string) {};
