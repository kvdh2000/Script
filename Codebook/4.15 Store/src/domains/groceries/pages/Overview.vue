<script setup>
	import GroceriesTable from "../components/GroceriesTable.vue";
	import { getAllGroceries } from "../store";
</script>

<template>
	<GroceriesTable :groceries="getAllGroceries" />
</template>
