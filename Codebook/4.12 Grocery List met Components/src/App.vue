<script setup>
	import { ref } from 'vue'
	import GroceriesTable from './components/GroceriesTable.vue'

	const groceryList = ref([
		{
			item: 'Rice',
			price: 1.00,
			amount: 1
		},
		{
			item: 'Brocooli',
			price: 0.99,
			amount: 2
		},
		{
			item: 'Cookies',
			price: 1.20,
			amount: 4
		},
		{
			item: 'Nuts',
			price: 2.99,
			amount: 0
		}
	]);

	const tasks = ref([
		{ task: 'Do groceries', completed: false },
		{ task: 'Do dishes', completed: true },
		{ task: 'Walk dog', completed: false }
	]);
</script>

<template>
  <GroceriesTable v-model="groceryList"/>
</template>
