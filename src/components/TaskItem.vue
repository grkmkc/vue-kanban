<template>
  <div class="card task-item">
    <div class="card-block">
      <h5 class="card-title">
        <span class="text-muted">#{{item.id}}</span>
        {{item.text}}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['item'],
};
</script>

<style>
  .card.task-item {
    background: #627180;
  }
</style>