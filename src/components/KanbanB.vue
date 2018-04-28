<template>
  <div class="board">
    <div class="row">
        <div class="col-md">
          <tasks id="todo" title="To-Do" :items="todoItems"></tasks>
        </div>
        <div class="col-md">
          <tasks id="develop" title="Develop" :items="developItems"></tasks>
        </div>
        <div class="col-md">
          <tasks id="test" title="Test" :items="testItems"></tasks>
        </div>
        <div class="col-md">
          <tasks id="done" title="Done" :items="doneItems"></tasks>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Tasks from "./Tasks";

export default {
  name: "KanbanBoard",
  components: {
    tasks: Tasks
  },
  computed: mapState({
    todoItems: s => s.items.todo,
    developItems: s => s.items.develop,
    testItems: s => s.items.test,
    doneItems: s => s.items.done
  })
};
</script>