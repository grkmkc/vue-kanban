<template>
  <div class="backlog-view">
    <new-item></new-item>

    <div class="card" v-for='item in items' :key='item.id'>
      <div class="card-block">
        <h4 class="card-title"><span class="text-muted">#{{item.id}}</span> 
        {{item.text}}</h4>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import AddForm from './AddForm.vue';

export default {
  name: 'Backlog',
  components : {
    'new-item' : AddForm,
  },
  computed: mapState({ 
    items: s => s.items.todo,
  }),
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
