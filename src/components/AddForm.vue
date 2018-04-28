/* eslint-disable no-param-reassign */
<template>
	<div class="add-item">
		<form action="#"  method="post" v-on:submit.prevent="submitForm" >
			<input type="text"  v-model="itemText" placeholder="Type something to add backlog">
		</form>
	</div>
</template>

<script>
export default {
	name: 'AddForm' ,       // componenttimiz
	data() {                    /* // bu da gelecek data, */
		return {
			itemText: ' ', /* // vmodel ile formdan gelecek input.
	 */	};
	},
	methods: {      /*  // method tanımlıcaz. */
		submitForm() { /* // item text zaten v-model ile verildi burda submit edicez. */
			if  (this.itemText) {
				this.$store.commit('addItem', {
					text: this.itemText,
				});

				this.itemText = ' ' ; /* // clear the data for new user data */
			}
		},
	},
};
</script>

<style>
.add-item input {
	outline: none;
	border: 0;
	border-bottom: 2px solid rgba(255, 255, 255, 0.5);
	width: 100%;
	transition: all 0.25s;
	background: inherit;
	color: #ffffff;
}
.add-item input:focus {
	border-bottom-color: rgba(255, 255, 255, 1);
}
</style>
