<script setup lang="ts">
	import type { Product } from "../types";

	defineProps<{
		product: Product;
		buttonText: string;
	}>();

	const emit = defineEmits<{
		(e: "save"): void;
		(e: "cancel"): void;
	}>();
</script>

<template>
	<div class="form">
		<label for="name">Product Name</label>
		<input
			id="name"
			type="text"
			v-model="product.name"
		/>

		<label for="actualAmount">Actual Amount</label>
		<input
			id="actualAmount"
			type="number"
			v-model.number="product.actualAmount"
		/>

		<label for="minimumAmount">Minimum Amount</label>
		<input
			id="minimumAmount"
			type="number"
			v-model.number="product.minimumAmount"
		/>

		<div class="buttons">
			<button @click="emit('cancel')">Cancel</button>

			<button @click="emit('save')">
				{{ buttonText }}
			</button>
		</div>
	</div>
</template>

<style scoped>
	.form {
		display: flex;
		flex-direction: column;
		max-width: 400px;
		margin: 20px auto;
	}

	label {
		margin-bottom: 5px;
		font-weight: bold;
	}

	input {
		padding: 6px;
	}

	.buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
</style>
