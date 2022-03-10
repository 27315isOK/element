import Vue from 'vue'

import 'normalize.css/normalize.css' // 导入一个通用的css样式

import ElementUI from 'element-ui'  //导入element-ui
import 'element-ui/lib/theme-chalk/index.css' //导入element-ui的样式
import locale from 'element-ui/lib/locale/lang/en' // 导入英文语言

import '@/styles/index.scss' // @指src目录 这里是导入公共样式文件

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // 加载svg格式的图标;如需使用其他图标，将svg格式图标放在icons/svg目录下即可直接使用
import '@/permission' // 导航守卫；登陆状态的验证

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
