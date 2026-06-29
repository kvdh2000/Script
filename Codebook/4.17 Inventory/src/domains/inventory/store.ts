import { ref } from "vue";
import type { Product } from "./types";

export const products = ref<Product[]>([
	{
		id: 1,
		name: "Laptop",
		actualAmount: 12,
		minimumAmount: 5,
	},
	{
		id: 2,
		name: "Monitor",
		actualAmount: 8,
		minimumAmount: 3,
	},
	{
		id: 3,
		name: "Toetsenbord",
		actualAmount: 15,
		minimumAmount: 5,
	},
	{
		id: 4,
		name: "Muis",
		actualAmount: 20,
		minimumAmount: 10,
	},
	{
		id: 5,
		name: "Webcam",
		actualAmount: 6,
		minimumAmount: 2,
	},
	{
		id: 6,
		name: "Headset",
		actualAmount: 4,
		minimumAmount: 3,
	},
	{
		id: 7,
		name: "Printer",
		actualAmount: 2,
		minimumAmount: 1,
	},
]);

export function addProduct(product: Product) {
	products.value.push(product);
}

export function getProductById(id: number) {
	return products.value.find(product => product.id === id);
}

export function updateProduct(updatedProduct: Product) {
	const index = products.value.findIndex(product => product.id === updatedProduct.id);

	if (index !== -1) {
		products.value[index] = updatedProduct;
	}
}

export function removeProduct(id: number) {
	products.value = products.value.filter(product => product.id !== id);
}
