<script setup>
	import { ref } from "vue";
	import GroceriesTable from "./components/GroceriesTable.vue";

	const groceryList = ref([
		{
			item: "Rice",
			price: 1.0,
			amount: 1,
		},
		{
			item: "Brocooli",
			price: 0.99,
			amount: 2,
		},
		{
			item: "Cookies",
			price: 1.2,
			amount: 4,
		},
		{
			item: "Nuts",
			price: 2.99,
			amount: 0,
		},
	]);
</script>

<template>
	<GroceriesTable v-model="groceryList" />
</template>
