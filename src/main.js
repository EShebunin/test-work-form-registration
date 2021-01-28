import Vue from 'vue';
import clickOutside from '@/ui-components/utils/directives/click-outside';
import App from './App.vue';

import '@/ui-components';

import '@/assets/style.scss';

Vue.directive('click-outside', clickOutside);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
