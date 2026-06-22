<script setup>
	import { computed } from "vue";

	import { removeGrocery } from "../store";

	const props = defineProps({
		groceries: {
			type: Array,
			required: true,
		},
	});

	function toMoney(x) {
		return Number.parseFloat(x).toFixed(2);
	}

	const totalPrice = computed(() => toMoney(props.groceries.reduce((sum, item) => sum + item.price * item.amount, 0)));
</script>

<template>
	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th scope="col">Amount</th>
					<th scope="col">Product</th>
					<th scope="col">Price</th>
					<th scope="col">Subtotal</th>
					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(item, index) in groceries"
					:key="item.id"
				>
					<td class="firstCol">{{ item.amount }}</td>
					<td class="secondCol">{{ item.name }}</td>
					<td class="price">{{ toMoney(item.price) }}</td>
					<td class="price">{{ toMoney(item.price * item.amount) }}</td>
					<td>
						<router-link :to="`/edit/${item.id}`"> Edit </router-link>
					</td>
					<td>
						<button @click="removeGrocery(item.id)">Delete</button>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td
						class="borderless"
						colspan="2"
					></td>
					<th scope="row">Total</th>
					<td class="price">{{ totalPrice }}</td>
				</tr>
			</tfoot>
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

	.firstCol {
		width: 10px;
	}

	.secondCol {
		width: 200px;
	}

	.deleteCol {
		text-align: center;
	}

	.borderless {
		border: none;
	}

	.price {
		text-align: right;
		width: 70px;
	}
</style>
