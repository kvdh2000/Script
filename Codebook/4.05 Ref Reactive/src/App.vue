<script setup>
	import { ref, reactive } from "vue";

	const clicks = ref(0);

	const person = reactive({
		firstName: "",
		country: "",
	});

	// functie voor knop 1
	function incrementClicks() {
		clicks.value++;
	}

	// functie voor knop 2 en 3
	function changeCountry(newCountry) {
		person.country = newCountry;
	}
</script>

<template>
	<div>
		<h1>Visitors Card</h1>

		<label>
			Name:
			<input
				type="text"
				v-model="person.firstName"
				placeholder="Type your name"
			/>
		</label>

		<br />

		<button @click="incrementClicks">Click me!</button>

		<button @click="changeCountry('Netherlands')">Netherlands</button>

		<button @click="changeCountry('Belgium')">Belgium</button>

		<p>Name: {{ person.firstName }}</p>
		<p>Country: {{ person.country }}</p>
		<p>Number of clicks: {{ clicks }}</p>
	</div>
</template>

<style scoped>
	div {
		padding: 20px;
	}

	button {
		margin: 5px;
	}

	input {
		margin-left: 5px;
	}
</style>
