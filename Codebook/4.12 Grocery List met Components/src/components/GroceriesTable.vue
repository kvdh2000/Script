<script setup>
	import { computed } from 'vue'

	const groceryList = defineModel()

	function financial(x) {
  	return Number.parseFloat(x).toFixed(2);
	}

	const totalPrice = computed(() =>
		financial(groceryList.value.reduce((sum, item) => sum + (item.price * item.amount), 0))
	)
</script>

<template>
<!-- 	
	change amount column to be an input, default to 1
	change column widths
	 -->
	<table>
		<thead>
			<tr>
				<th scope="col"> Amount </th>
				<th scope="col"> Product </th>
				<th scope="col"> Price </th>
				<th scope="col"> Subtotal </th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, index) in groceryList" :key="index">
				<td>{{ item.amount }}</td>
				<td>{{ item.item }}</td>
				<td class="price">{{ financial(item.price) }}</td>
				<td class="price">{{ financial(item.price * item.amount) }}</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td class="borderless"></td>
				<th scope="row" colspan="2"> Total </th>
				<td class="price"> {{ totalPrice }} </td>
			</tr>
		</tfoot>
	</table>
</template>

<style scoped>
* {
	font-family: sans-serif;
}

table {
	border-collapse: collapse;
}

th,
td,
tr {
	text-align: left;
	border: 1px solid #888;
	padding: 10px;
}

.borderless
{
	border: none;
}

.price {
	text-align: right;
}
</style>
