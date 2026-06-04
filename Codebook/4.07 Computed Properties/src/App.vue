
<script setup>
	import { ref, computed } from 'vue'

	const people = ref([
		{ name: 'Jan', age: 12 },
		{ name: 'Piet', age: 20 }
	]);

	const newName = ref('');
	const newAge = ref(null);

	function addPerson() {
		if (!newName.value || newAge.value === null) return

		people.value.push({
			name: newName.value,
			age: newAge.value
		})

		newName.value = ''
		newAge.value = null
	}

	const children = computed(() => {
  	return people.value.filter(person => person.age < 18)
	})

	const adults = computed(() => {
  return people.value.filter(person => person.age >= 18)
	})

	const totalPeople = computed(() => {
		return people.value.length
	})

	const numberOfChildren = computed(() => {
		return children.value.length
	})

	const numberOfAdults = computed(() => {
		return adults.value.length
	})
</script>

<template>
	<div class="container">
		<div class="form">
			<input
				v-model="newName"
				type="text"
				placeholder="Name"
			>

			<input
				v-model.number="newAge"
				type="number"
				placeholder="Age"
			>

			<button @click="addPerson">
				Add Person
			</button>
		</div>

		<div class="lists">
			<div>
				<h2>
				All people
				<br><small>({{ totalPeople }})</small>
				</h2>

				<ul>
					<li v-for="(person, index) in people" :key="index">
						{{ person.name }} ({{ person.age }} y/o)
					</li>
				</ul>
			</div>
			
			<div>
				<h2>
					Just the kids
					<br><small>({{ numberOfChildren }})</small>
				</h2>

				<ul>
					<li v-for="(child, index) in children" :key="index">
						{{ child.name }} ({{ child.age }} y/o)
					</li>
				</ul>
			</div>

			<div>
        <h2>
					Just the adults
					<br><small>({{ numberOfAdults }})</small>
				</h2>

        <ul>
          <li v-for="(adult, index) in adults" :key="index">
            {{ adult.name }} ({{ adult.age }} y/o)
          </li>
        </ul>
      </div>
		</div>
	</div>
</template>

<style>
	.container
	{
		text-align: center;
	  margin: 0 auto;
	}

	.form
	{
		margin-bottom: 20px;
	}
	
	input, 
	button
	{
		margin: 5px;
		padding: 5px;
	}

	.lists
	{
		display: flex;
		justify-content: space-around;
	}

	ul 
	{
  	list-style: none;
		padding: 0px;
	}

	li 
	{
		padding: 5px;
	}
</style>

