const router = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/index')
  },
  {
    name: 'introduction',
    path: '/introduction',
    component: () => import('@/views/introduction')
  },
  {
    name: 'lifecycle',
    path: '/lifecycle',
    component: () => import('@/views/lifecycle')
  },
  {
    name: 'render',
    path: '/render',
    component: () => import('@/views/render')
  },
  {
    path: '*',
    redirect: '/'
  }
  // {
  //   path: '/',
  //   redirect: '/index'
  // }
];

export default router;
