<script setup lang="ts">
	import { products, removeProduct } from "../store";
</script>

<template>
	<h1>Inventory</h1>

	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th scope="col">Product</th>
					<th scope="col">
						Actual
						<br />Amount
					</th>
					<th scope="col">
						Minimum
						<br />Amount
					</th>
					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="product in products"
					:key="product.id"
				>
					<td class="nameCol">{{ product.name }}</td>
					<td class="amountCol">
						<input
							type="number"
							v-model.number="product.actualAmount"
						/>
					</td>
					<td class="amountCol">
						{{ product.minimumAmount }}
					</td>
					<td class="actionsCol">
						<router-link :to="`/edit/${product.id}`">
							<button>Edit</button>
						</router-link>
					</td>
					<td class="actionsCol">
						<button @click="removeProduct(product.id)">Delete</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<router-link to="/create">
		<button>Add Product</button>
	</router-link>
	<router-link to="/order">
		<button>Order List</button>
	</router-link>
</template>

<style scoped>
	* {
		font-family: sans-serif;
	}

	h1 {
		margin-top: 15px;
	}

	button {
		margin: 5px;
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
