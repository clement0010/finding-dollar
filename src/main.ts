import Vue from 'vue';

import { Chart, registerables } from 'chart.js';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Chart.register(...registerables);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
