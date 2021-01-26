import Vue from 'vue';

import clickOutside from './utils/directives/click-outside';
import './index.scss';

Vue.directive('click-outside', clickOutside);

const requireComponent = require.context('.', true, /[\w-]+\.vue$/);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const str = fileName.split('/')[2];
  const componentName = `ui-${str[0].toLowerCase()}${str.slice(1)}`;
  Vue.component(componentName, componentConfig.default || componentConfig);
});
