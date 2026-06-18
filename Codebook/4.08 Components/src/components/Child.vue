<script setup>
	const message = defineModel();
</script>

<template>
	<div>
		<input
			v-model="message"
			placeholder="Type something..."
		/>
	</div>
</template>
