<script setup>
	import { ref } from 'vue'
	import ThrownDice from './components/ThrownDice.vue'
	import ScoreTable from './components/ScoreTable.vue'

	const dice = ref([1, 1, 1, 1, 1]);
</script>

<template>
	<h1>
		Yahtzee!
	</h1>
	<ThrownDice v-model="dice" />
	<ScoreTable v-model="dice" />
</template>
