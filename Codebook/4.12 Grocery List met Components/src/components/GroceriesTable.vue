<script setup>
	import { ref, computed } from 'vue'

	const groceryList = defineModel()

	function toMoney(x) {
  	return Number.parseFloat(x).toFixed(2);
	}

	const totalPrice = computed(() =>
		toMoney(groceryList.value.reduce((sum, item) => sum + (item.price * item.amount), 0))
	)

	let newItem = ref(	
	{
		item: '',
		price: null,
		amount: 1
	})

	function addItem()
	{
		if (!newItem.value.item || newItem.value.price === null) return

		groceryList.value.push(newItem.value);

		newItem.value = 
		{
			item: '',
			price: null,
			amount: 1
		}
	}

	function removeItem(index)
	{
		groceryList.value.splice(index, 1)
	}
</script>

<template>
	<div class="form">
		<h2>
			Enter new item:
		</h2>

		<div>
			<input type="text" name="newItemName" v-model="newItem.item"> 
			Price: 
			<input type="number" class="priceInput" name="newItemPrice" v-model="newItem.price">
			<button @click="addItem()">
				Add Item
			</button>
		</div>
	</div>
	<br>
	<div class="table-container">
	 <table>
			<thead>
				<tr>
					<th scope="col"> Amount </th>
					<th scope="col"> Product </th>
					<th scope="col"> Price </th>
					<th scope="col"> Subtotal </th>
					<th scope="col"> Delete </th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in groceryList" :key="index">
					<td class="firstCol"><input type="number" name="quantity" v-model="item.amount"></td>
					<td class="secondCol">{{ item.item }}</td>
					<td class="price">{{ toMoney(item.price) }}</td>
					<td class="price">{{ toMoney(item.price * item.amount) }}</td>
					<td class="deleteCol"><button @click="removeItem(index)">X</button></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td class="borderless" colspan="2"></td>
					<th scope="row"> Total </th>
					<td class="price"> {{ totalPrice }} </td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<style scoped>
	* 
	{
		font-family: sans-serif;
	}

	h2
	{
		margin-top: 15px;
	}
	
	button
	{
		margin: 5px;
	}
	
	.priceInput,
	tr input
	{
		text-align: right;
		width: 60px;
	}

	.table-container
	{
		display: flex;
		justify-content: center;
	}

	table 
	{
		border-collapse: collapse;
	}

	th,
	td 
	{
		text-align: left;
		border: 1px solid #888;
		padding: 10px;
	}

	.firstCol
	{
		width: 10px;
	}

	.secondCol
	{
		width: 200px;
	}

	.deleteCol
	{
		text-align: center;
	}

	.borderless
	{
		border: none;
	}

	.price 
	{
		text-align: right;
		width: 70px;
	}
</style>
