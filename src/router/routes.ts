import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'home',        path: '',         component: () => import('pages/Index.vue') },
      { name:'page.rizky',  path: '/rizky',   component: () => import('pages/people/Rizky.vue') },
      { name:'page.kho',    path: '/kho',     component: () => import('pages/people/Kho.vue') },
      { name:'page.oscar',  path: '/oscar',   component: () => import('pages/people/Oscar.vue') },
      { name:'page.kevin',  path: '/kevin',   component: () => import('pages/people/Kevin.vue') },
      { name:'page.evan',   path: '/evan',    component: () => import('pages/people/Evan.vue') },
    ]
  },
  // 404
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
