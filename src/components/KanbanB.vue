<template>
  <div class="board">
    <div class="row">
        <div class="col-md">
          <tasks id="todo" title="To-Do" :items="todoItems"></tasks>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Tasks from './Tasks';

export default {
  name: 'KanbanBoard',
  components: {
    'tasks': Tasks,
  },
  computed: mapState({
    todoItems: s => s.items.todo,
  }),
};
</script>