import { reactive } from "vue";
import type { Product } from "./types";

export const inventoryStore = reactive({
	products: [
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
	] as Product[],
});
