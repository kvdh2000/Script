<script setup>
	import GroceryForm from "../components/GroceryForm.vue";
	import { addGrocery } from "../store";
	import { useRouter } from "vue-router";

	const router = useRouter();

	const grocery = {
		name: "",
		price: 0,
		amount: 0,
	};

	function createGrocery(newGrocery) {
		addGrocery(newGrocery);

		router.push("/");
	}
</script>

<template>
	<GroceryForm
		:grocery="grocery"
		@submit="createGrocery"
	/>
</template>
