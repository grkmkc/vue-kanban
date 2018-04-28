<template>
  <div class="backlog-view">
    <new-item></new-item>

    <div class="card" v-for='item in items' :key='item.id'>
      <div class="card-block">
        <h4 class="card-title"><span class="text-muted">#{{item.id}}</span> 
        {{item.text}} <span :class="badgeClass(item)">
          {{badgeText(item)}}</span>
          </h4>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import AddForm from "./AddForm.vue";

const badgeDetail = {
  todo: {
    text: "to-do",
    class: "badge badge-info"
  },
  develop: {
    text: "in development process",
    class: "badge badge-warning "
  },
  test: {
    text: "in test process",
    class: "badge badge-danger"
  },
  done: {
    text: "done",
    class: "badge badge-success"
  }
};

export default {
  name: "Backlog",
  components: {
    "new-item": AddForm
  },
  methods: {
    itemLane(item) {
      if (this.$store.state.items.todo.includes(item)) {
        return "todo";
      } else if (this.$store.state.items.develop.includes(item)) {
        return "develop";
      } else if (this.$store.state.items.test.includes(item)) {
        return "test";
      }
      return "done";
    },
    badgeText(item) {
      const lane = this.itemLane(item);
      return badgeDetail[lane].text;
    },
    badgeClass(item) {
      const lane = this.itemLane(item);
      return badgeDetail[lane].class;
    }
  },
  computed: mapState({
    items: s => [
      ...s.items.todo,
      ...s.items.test,
      ...s.items.develop,
      ...s.items.done
    ]
  })
};
</script>
<style>
.card {
  margin-bottom: 10px;
}

.card:last-child {
  margin-bottom: 25px;
}

.card-block {
  padding: 15px;
}

.add-item {
  margin: 30px 0;
}
</style>
