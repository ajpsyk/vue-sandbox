import { createRouter, createWebHistory } from 'vue-router';
import ArticleList from '../views/ArticleList.vue';
import ArticleDetail from '../views/ArticleDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/articles',
      name: 'article-list',
      component: ArticleList
    },
    {
      path: '/articles/:id',
      name: 'article-detail',
      component: ArticleDetail
    }
  ]
});

export default router;