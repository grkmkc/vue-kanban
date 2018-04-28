/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    items: {
      todo: [],
      develop: [],
      test: [],
      done:[],
    },
    nextId: 1,
  },
  mutations : {
    addItem(state, item) {
      state.items.todo.push(Object.assign(item, {i: state.nextId}));
      state.nextId += 1;
    },
    updateItems(state, payload) {
      state.items[payload.id] = payload.items;
    },
  },
});