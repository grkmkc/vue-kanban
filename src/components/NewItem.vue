<template>
  <div class="add-item">
    <form action="#"  method="post" v-on:submit.prevent="submitForm" >
      <input type="text"  v-model="itemText" placeholder="Something to add to backlog">
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewItem',  // componenttimiz.
  data(){ // bu da gelecek data,
    return{
      itemText: ' ', // vmodel ile formdan gelecek input.
    };
  },
  methods: { // method tanımlıcaz.
    submitForm (){ // item text zaten v-model ile verildi burda submit edicez.
      if(this.itemText){
        this.$store.commit('addItem', {
          text: this.$itemText,
        });

        this.itemText = ' '; // clear the data for new user data
      }
    },
  },
};
</script>
