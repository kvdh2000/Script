import Overview from "./pages/Overview.vue";
import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";
import Order from "./pages/Order.vue";

export default [
	{
		path: "/",
		name: "inventory-overview",
		component: Overview,
	},
	{
		path: "/create",
		name: "inventory-create",
		component: Create,
	},
	{
		path: "/edit/:id",
		name: "inventory-edit",
		component: Edit,
	},
	{
		path: "/order",
		name: "inventory-order",
		component: Order,
	},
];
