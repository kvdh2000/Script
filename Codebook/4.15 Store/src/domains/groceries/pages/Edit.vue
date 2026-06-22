<script setup>
	import { computed } from "vue";
	import { useRoute, useRouter } from "vue-router";

	import GroceryForm from "../components/GroceryForm.vue";

	import { getGroceryById, updateGrocery } from "../store";

	const route = useRoute();
	const router = useRouter();

	const grocery = computed(() => getGroceryById(Number(route.params.id)).value);

	function save(updatedGrocery) {
		updateGrocery(updatedGrocery);

		router.push("/");
	}
</script>

<template>
	<GroceryForm
		v-if="grocery"
		:grocery="grocery"
		@submit="save"
	/>
</template>
