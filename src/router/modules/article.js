/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true) 就是element里面的东西
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
import Layout from '@/layout'

export default {
    path: '/article',  // 这个path好像没啥用。
    component : Layout,
    meta:{title:'文章管理',icon:'order'}, // 标题名称
    children:[
      {
        path:'/articleList',
        name:'articleList',
        component: () => import('@/views/article/articleList/articleList'),
        meta: {title: '文章列表',icon: 'order' }
      },
      {
        path:'/articleIssue',
        name:'articleIssue',
        component: () => import('@/views/article/articleIssue'),
        meta: {title: '文章发布',icon: 'order_unread' }
      }
    ]
  }