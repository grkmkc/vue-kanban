/* eslint-disable no-param-reassign */
<template>
  <div id="app">
    <div class="page-header">
      <h1>Kanban Board</h1>
    </div>
    <menu-bar></menu-bar>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  name: 'App',
  components: {
    'menu-bar' : Menu
  }
};
</script>
<style>
  .page-header h1 {
    font-weight: 300;
    text-align: center; 
  }
</style>