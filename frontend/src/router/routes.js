const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue')},
      { path: 'popisNovihKnjiga', name: 'NoveKnjige', component: () => import('pages/NoveKnjige.vue')},
      { path: 'popisKnjiga', name: 'PopisKnjiga', component: () => import('pages/PopisKnjiga.vue')},
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
