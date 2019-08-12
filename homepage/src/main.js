import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// import '@/assets/js/size.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css'



// import VueRouter from 'vue-router';

Vue.config.productionTip = false
// Vue.use(VueRouter)
// Vue.use(iView)
Vue.use(ElementUI);

// const RouterConfig = {
//   routes: Routers
// }
// const router = new VueRouter(RouterConfig);
// Vue.use(iView, {
//   transfer: true,
//   size: 'large',
//   select: {
//     arrow: 'md-arrow-dropdown',
//     arrowSize: 20
//   }
// });

Vue.prototype.bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')