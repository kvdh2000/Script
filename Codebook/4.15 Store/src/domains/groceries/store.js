import { ref, computed } from "vue";

const groceries = ref([
	{
		id: 1,
		name: "Rice",
		price: 1.0,
		amount: 1,
	},
	{
		id: 2,
		name: "Brocooli",
		price: 0.99,
		amount: 2,
	},
	{
		id: 3,
		name: "Cookies",
		price: 1.2,
		amount: 4,
	},
	{
		id: 4,
		name: "Nuts",
		price: 2.99,
		amount: 0,
	},
]);

export const getAllGroceries = computed(() => groceries.value);

export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

function getNextId() {
	return groceries.value.length ? Math.max(...groceries.value.map(g => g.id)) + 1 : 1;
}

export function addGrocery(grocery) {
	groceries.value.push({
		...grocery,
		id: getNextId(),
	});
}

export function updateGrocery(updatedGrocery) {
	const index = groceries.value.findIndex(g => g.id == updatedGrocery.id);

	if (index !== -1) {
		groceries.value[index] = updatedGrocery;
	}
}

export function removeGrocery(id) {
	groceries.value = groceries.value.filter(grocery => grocery.id !== id);
}
