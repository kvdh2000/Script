<script setup lang="ts">
	import { computed } from "vue";
	import { products } from "../store";

	const orderProducts = computed(() => products.value.filter(product => product.actualAmount < product.minimumAmount));
</script>

<template>
	<h1>Order List</h1>

	<table>
		<thead>
			<tr>
				<th>Product</th>
				<th>
					Actual
					<br />Amount
				</th>
				<th>
					Minimum
					<br />Amount
				</th>
			</tr>
		</thead>
		<tbody>
			<tr
				v-for="product in orderProducts"
				:key="product.id"
			>
				<td>{{ product.name }}</td>
				<td>{{ product.actualAmount }}</td>
				<td>{{ product.minimumAmount }}</td>
			</tr>
		</tbody>
	</table>

	<router-link to="/">
		<button>Back</button>
	</router-link>
</template>

<style scoped>
	table {
		border-collapse: collapse;
		margin: 20px auto;
	}

	th,
	td {
		border: 1px solid #888;
		padding: 10px;
	}
</style>
