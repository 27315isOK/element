import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/my',
    component: Layout,  //这些Layout是layout文件夹下的index文件,而内容是通过<app-main/>也就是<router-view />跳转路由得，所以<app-main/>就是我们的内容区
    name: 'my',
    meta: { title: '我的', icon: 'venom' }

  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  },
  {
    path: '/banner',
    component: Layout,
    redirect:'/banner/list',
    children:[{
      path:'list',
      name:'List',
      component:()=>import('@/views/banner/index'),
      meta: { title: '轮播图', icon: 'banner' }
    }]
    
  },
  {
    path: '/order',
    component: Layout,
    redirect:'/order/list',
    children:[{
      path:'list',
      name:'orderList',
      component:()=>import('@/views/order/order'),
      meta: { title: '订单查询', icon: 'form' }
    }]   
  },
  {
    path: '/users',
    component: Layout,
    redirect:'/users/allusers',
    children:[{
      path:'allusers',
      name:'usersall',
      component:()=>import('@/views/users/users'),
      meta: { title: '用户查询', icon: 'users' }
    }]   
  },
  //这里的路由配置文件，和左侧菜单是一一对应的
  //只要菜单的子路由超过两个，左侧菜单就会出现二级菜单
  {
    path: '/pro',
    component: Layout,
    redirect: '/pro/all',
    name: 'allpro',
    meta: { title: '商品管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'all',
        name: 'all',
        component: () => import('@/views/pro/all'),
        meta: { title: '查看所有商品', icon: 'table' }
        // title属性是菜单显示的名字 icon属性就是左侧的图标
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/pro/recommend'),
        meta: { title: '推荐列表', icon: 'recommend' }
      },
      {
        path: 'flash',
        name: 'flash',
        component: () => import('@/views/pro/flash'),
        meta: { title: '秒杀列表', icon: 'flash' }
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/example/adminlist',
    name: 'Example',
    meta: { title: '管理员', icon: 'admin' },
    children: [
      {
        path: 'adminlist',
        name: 'adminlist',
        component: () => import('@/views/adminlist/adminlist'),
        meta: { title: '管理员列表', icon: 'list' }
        // title属性是菜单显示的名字 icon属性就是左侧的图标
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/views/add/add'),
        meta: { title: '添加管理员', icon: 'add' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
