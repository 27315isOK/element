import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 浏览器顶部进度条插件  
import 'nprogress/nprogress.css' // 浏览器顶部进度条插件的样式
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title 设置title为当前页面的title 只要路由发生变化，就会调用getPageTitle来设置当前页面title
  document.title = getPageTitle(to.meta.title)

  // 从cookie中取到token token通常表示登录状态
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 如果是已经登录的并且访问的是登录页，就跳转到首页
      next({ path: '/' })
      NProgress.done()
    } else {  //如果不是登录页的情况
      const hasGetUserInfo = store.getters.name  //取到存在vuex中的name
      if (hasGetUserInfo) {
        next() //如果有name，那么就会跳转到相应页面
      } else { 
        try {
          // 如果没有name，就调用actions中的getInfo来获取
          await store.dispatch('user/getInfo')

          next()
        } catch (error) {
          // 如果没有成功获取到用户信息，就会到catch这里
          // 出错了没有用户信息，就调用actions中的resetToken，就把存在cookie中的token删除
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')  //elementui的一个提示框
          next(`/login?redirect=${to.path}`) //因为没有用户信息了，就要跳转到登录页
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    // 没有token的情况，就判断目标路由是否在白名单内
    //如果在白名单内，就直接跳转，如果不在，就跳转到登录页
    //白名单:有些不需要登录的页面，一起写在白名单内
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
