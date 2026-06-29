<script setup lang="ts">
	import { reactive } from "vue";
	import { useRoute, useRouter } from "vue-router";

	import ProductForm from "../components/ProductForm.vue";
	import { getProductById, updateProduct } from "../store";

	const route = useRoute();
	const router = useRouter();

	const id = Number(route.params.id);

	const originalProduct = getProductById(id);

	if (!originalProduct) {
		router.push("/");
	}

	const editedProduct = reactive({
		...originalProduct!,
	});

	function saveProduct() {
		updateProduct({
			...editedProduct,
		});

		router.push("/");
	}

	function cancel() {
		router.push("/");
	}
</script>

<template>
	<h1>Edit Product</h1>

	<ProductForm
		:product="editedProduct"
		buttonText="Update"
		@save="saveProduct"
		@cancel="cancel"
	/>
</template>
