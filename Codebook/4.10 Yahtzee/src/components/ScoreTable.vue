<script setup>
	import { computed } from 'vue'

	const dice = defineModel()

	const total = computed(() =>
  	dice.value.reduce((sum, die) => sum + die, 0)
	)

	const counts = computed(() => {
		const frequency = {}

		for (const die of dice.value) {
			frequency[die] = (frequency[die] || 0) + 1
		}

		return frequency
	})
	
	const ones = computed(() =>
  dice.value.filter(die => die === 1).length * 1
	)

	const twos = computed(() =>
		dice.value.filter(die => die === 2).length * 2
	)

	const threes = computed(() =>
		dice.value.filter(die => die === 3).length * 3
	)

	const fours = computed(() =>
		dice.value.filter(die => die === 4).length * 4
	)

	const fives = computed(() =>
		dice.value.filter(die => die === 5).length * 5
	)

	const sixes = computed(() =>
		dice.value.filter(die => die === 6).length * 6
	)

	function hasCount(amount) {
		return Object.values(counts.value).includes(amount)
	}
	
	function ofKind(die)
	{	
		for (const value in counts.value) 
		{
			if (counts.value[value] >= die) 
			{
			return value * die
			}
		}

		return 0
	}
	
	function getSorted()
	{
		return [...new Set(dice.value)].sort().join('')
	}

	const threeKind = computed(() => ofKind(3))

	const fourKind = computed(() => ofKind(4))

	const fullHouse = computed(() =>
		hasCount(3) && hasCount(2) ? 25 : 0
	)
	
	const smallStraight = computed(() => {
		const sorted = getSorted()

		if
		(
			sorted.includes('1234') ||
			sorted.includes('2345') ||
			sorted.includes('3456')
		) 
		{
			return 30
		}
		
		return 0
	})
		
	const largeStraight = computed(() =>
	{
		const sorted = getSorted()

		if
		(
			sorted === '12345' ||
			sorted === '23456')
		{
			return 40
		}

		return 0
	})

	const yahtzee = computed(() => hasCount(5) ? 50 : 0)

	const upperScores = computed(() => ones.value + twos.value + threes.value + fours.value + fives.value + sixes.value)
	const lowerScores = computed(() => threeKind.value+fourKind.value+smallStraight.value+largeStraight.value+yahtzee.value)	
</script>

<template>
	<h2>Scores</h2>

  <div class="scores">
    <div>
			<table>
				<thead>
					<tr>
						<th colspan="2">
							Upper 
							<br> Section	
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Ones</td>
						<td>{{ ones }}</td>
					</tr>
					<tr>
						<td>Twos</td>
						<td>{{ twos }}</td>
					</tr>
					<tr>
						<td>Threes</td>
						<td>{{ threes }}</td>
					</tr>
					<tr>
						<td>Fours</td>
						<td>{{ fours }}</td>
					</tr>
					<tr>
						<td>Fives</td>
						<td>{{ fives }}</td>
					</tr>
					<tr>
						<td>Sixes</td>
						<td>{{ sixes }}</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>Total:</td>
						<td>{{ upperScores }}</td>
					</tr>
				</tfoot>
			</table>
		</div>
		<div>
			<table>
				<thead>
					<tr>
						<th colspan="2">
							Lower 
							<br> Section	
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Three of a Kind</td>
						<td>{{ threeKind }}</td>
					</tr>
					<tr>
						<td>Four of a Kind</td>
						<td>{{ fourKind }}</td>
					</tr>
					<tr>
						<td>Full House</td>
						<td>{{ fullHouse }}</td>
					</tr>
					<tr>
						<td>Small Straight</td>
						<td>{{ smallStraight }}</td>
					</tr>
					<tr>
						<td>Large Straight</td>
						<td>{{ largeStraight }}</td>
					</tr>
					<tr>
						<td>Yahtzee</td>
						<td>{{ yahtzee }}</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>Total:</td>
						<td>{{ lowerScores }}</td>
					</tr>
				</tfoot>
			</table>
		</div>
  </div>

	<h2>
		Overall Total: 
		{{ upperScores+lowerScores }}
	</h2>
</template>

<style scoped>
	.scores
	{
		text-align: center;
	  margin: 0 auto;
		display: flex;
		justify-content: space-around;
	}
	
	table, th, td
	{
		border: 1px solid;
		padding: 1px;
	}

	tbody
	{
		padding: 3px;
	}
</style>
