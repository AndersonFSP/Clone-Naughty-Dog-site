
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'index', component: () => import('pages/Index') },
      { path: '/about', name:'about', component:() => import('pages/About')},
      { path: '/contact', name:'contact', component:() => import('pages/Contact')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
