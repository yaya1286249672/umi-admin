export const routersMap = [
  {
    path: '/welcome',
    title: '测试页面',
    name: '测试页面',
    component: '@/pages/user-manage',
  },
  {
    path: '/admin/sub-page1',
    name: '一级页面',
    component: '@/pages/sub-page',
  },
];

export const routers = [
  {
    path: '/',
    component: '@/layout',
    routes: [...routersMap],
  },
  {
    path: '/error',
    title: '权限提醒',
    exact: true,
    component: '@/layout/error',
  },
];
