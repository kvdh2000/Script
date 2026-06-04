<script setup>
	const dice = defineModel()

	function throwDice()
	{
		dice.value = dice.value.map(
			() => Math.floor(Math.random() * 6) + 1
		)	
	}
</script>

<template>
	<div>
		<h2>
		Dice
		</h2>

		<div class="dice">
				<span
					v-for="(die, index) in dice"
					:key="index"
				>
					🎲{{ die }}&nbsp&nbsp
				</span>
			</div>

			<button @click="throwDice">
				Throw em!
			</button>
	</div>
</template>

<style scoped>
	.dice 
	{
	  text-align: center;
	  margin: 0 auto;
		display: flex;
		justify-content: center;
	}
</style>
