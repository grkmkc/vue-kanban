/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Router from 'vue-router';
import Backlog from '@/components/Backlog';
import KanbanB from '@/components/KanbanB';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/backlog',
      component: Backlog,
    },
    {
      path: '/board',
      component: KanbanB,
    },
    {
      path: '*',
      redirect: 'Backlog',
    },
  ],
});
