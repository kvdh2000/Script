<script setup lang="ts">
	import { reactive } from "vue";
	import { useRouter } from "vue-router";

	import ProductForm from "../components/ProductForm.vue";
	import { addProduct, products } from "../store";

	const router = useRouter();

	const newProduct = reactive({
		id: Math.max(...products.value.map(product => product.id)) + 1,
		name: "",
		actualAmount: 0,
		minimumAmount: 0,
	});

	function saveProduct() {
		addProduct({
			...newProduct,
		});

		router.push("/");
	}

	function cancel() {
		router.push("/");
	}
</script>

<template>
	<h1>Add Product</h1>

	<ProductForm
		:product="newProduct"
		buttonText="Add"
		@save="saveProduct"
		@cancel="cancel"
	/>
</template>
