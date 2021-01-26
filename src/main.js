import Vue from 'vue';
import App from './App.vue';

import '@/ui-components';

import '@/assets/style.scss';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
