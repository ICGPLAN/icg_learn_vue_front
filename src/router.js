import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/locals'
import Contact from './views/company/Contact.vue'
import Home from './views/company/Home.vue'
import Privacy from './views/company/Privacy.vue'
import About from './views/company/About.vue'
// import NotFound from './views/error/4xx.vue'
import NotFound from './views/error/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: 'title.home',// タイトル
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta:{
      title: 'title.privacy',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta:{
      title: 'title.about',
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta:{
      title: 'title.contact',
    }
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: NotFound,
    meta:{
      title: 'error.notFound',
    }
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to,form,next) => {
  // const localLang = localStorage.getItem('lang');// キャッシュの言語
  // const browserLang = navigator.language;// ブラウザの言語
  // if(localLang !== 'ja' && browserLang !== 'ja'){
  window.document.title = i18n.global.t(to.meta.title);
  // } else {
  //   window.document.title = to.meta.title;
  // }
  next();
});

export default router