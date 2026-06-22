<script setup>
	import { ref, watch } from "vue";

	const props = defineProps({
		grocery: {
			type: Object,
			required: true,
		},
	});

	const emit = defineEmits(["submit"]);

	const form = ref({
		...props.grocery,
	});

	watch(
		() => props.grocery,
		newVal => {
			form.value = { ...newVal };
		},
		{ deep: true },
	);

	function submitForm() {
		emit("submit", { ...form.value });
	}
</script>

<template>
	<form
		@submit.prevent="submitForm"
		class="form"
	>
		<h2>Enter new item:</h2>

		<input
			type="text"
			v-model="form.name"
			placeholder="Grocery"
		/>

		<input
			type="number"
			class="priceInput"
			v-model.number="form.price"
			step="0.01"
			placeholder="Price"
		/>

		<input
			type="number"
			v-model.number="form.amount"
			placeholder="Amount"
		/>

		<button type="submit">Save</button>
	</form>
</template>

<style scoped>
	* {
		font-family: sans-serif;
	}

	h2 {
		margin-top: 15px;
	}

	button {
		margin: 5px;
	}

	.priceInput {
		text-align: right;
		width: 60px;
	}
</style>
