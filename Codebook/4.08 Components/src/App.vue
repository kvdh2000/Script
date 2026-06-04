<script setup>
	import { ref } from 'vue';
	import Child from './components/Child.vue';

	const message = ref('');
</script>

<template>
	<div>
		<Child v-model="message" />
		
		<p>
			Message: {{ message }}
		</p>
	</div>
</template>
