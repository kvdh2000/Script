<script setup lang="ts">
	import { inventoryStore } from "../store";
</script>

<template>
	<h1>Inventory</h1>

	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th scope="col">Product</th>
					<th scope="col">Amount</th>
					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="product in inventoryStore.products"
					:key="product.id"
				>
					<td class="nameCol">{{ product.name }}</td>
					<td class="amountCol">{{ product.actualAmount }} / {{ product.minimumAmount }}</td>
					<td class="actionsCol">
						<router-link :to="`/edit/${product.id}`">
							<button>Edit</button>
						</router-link>
					</td>
					<td class="actionsCol">
						<!-- <button @click="removeGrocery(item.id)">Delete</button> -->
					</td>
				</tr>
			</tbody>
		</table>
	</div>
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

	tr input {
		text-align: right;
		width: 60px;
	}

	.table-container {
		display: flex;
		justify-content: center;
	}

	table {
		border-collapse: collapse;
	}

	th,
	td {
		text-align: left;
		border: 1px solid #888;
		padding: 10px;
	}

	.nameCol {
		width: 200px;
	}

	.amountCol {
		text-align: center;
		width: 100px;
	}

	.actionsCol {
		text-align: center;
	}
</style>
