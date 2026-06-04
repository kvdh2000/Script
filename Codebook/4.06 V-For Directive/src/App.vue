<script setup>
	import { ref } from 'vue'

	const tasks = ref([
		{ task: 'Do groceries', completed: false },
		{ task: 'Do dishes', completed: true },
		{ task: 'Walk dog', completed: false }
	]);

	function toggleTaskCompletion(task) {
  task.completed = !task.completed
}
</script>

<template>
	<div>
		<h1>To-Do List</h1>

		<ul>
			<li v-for="(task, index) in tasks" :key="index">
				<span>
					{{ task.task }}
					({{ task.completed ? '&#9989' : '&#10060' }})
				</span>
				
				<button @click="toggleTaskCompletion(task)">
					Toggle
				</button>
			</li>
		</ul>
	</div>
</template>

<style>
	ul 
	{
		list-style: none;
		width: 400px;
		margin: auto;
		padding: 0;
	}

	li 
	{
		display: flex;
		align-items: center;
		padding: 5px;
	}

	span 
	{
		width: 300px;
	}
</style>
