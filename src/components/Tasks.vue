<template>
  <div class="card">
      <h3 class="card-header">{{title}}</h3>
      <div class="card-body">
        <draggable v-model="draggables" :options ="{ group : 'default'}">
          <div v-for="item in items" :key="item.id">
              <item :item="item"></item>
          </div>
        </draggable>
      </div>
      <div class="card-footer text-muted">
          {{itemCount}}
      </div>
  </div>
</template>

<script>
  import TaskItem from './TaskITem';
  import Draggable from 'vuedraggable';

export default {
  name: 'Tasks',
  props: ['items', 'title', 'id'],
  components: {
    item: TaskItem,
    draggable : Draggable,
  },
  computed: {
    itemCount() {
      if (!this.items) return '';
      if (this.items.length === 1) return '1 task';  //1item varsa task coksa tasks olsun. yoksa boş dursun.
      return `${this.items.length} tasks`;
    },
    draggables : {
      get () {
        return this.items; // dragable olsun ki taşıyabilelim.
      },
      set(items) {
        this.$store.commit('updateItems', {    // drag ettiğimizde update alalım store larken.
          items,
          id : this.id,
        });
      },
    },
  },
};

</script>
<style>
  .card-body > * {
    min-height: 50px;
  }
</style>
