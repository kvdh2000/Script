<script setup>
	import { computed } from "vue";

	const dice = defineModel();

	const counts = computed(() => {
		const frequency = {};

		for (const die of dice.value) {
			frequency[die] = (frequency[die] || 0) + 1;
		}

		return frequency;
	});

	function dieTypes(dieType) {
		if (dieType === 0) return dice.value.reduce((sum, die) => sum + die, 0);
		return dice.value.filter(die => die == dieType).length * dieType;
	}

	function hasCount(amount) {
		return Object.values(counts.value).includes(amount);
	}

	function ofKind(die) {
		for (const value in counts.value) {
			if (counts.value[value] >= die) {
				return value * die;
			}
		}

		return 0;
	}

	const threeKind = computed(() => ofKind(3));

	const fourKind = computed(() => ofKind(4));

	const fullHouse = computed(() => (hasCount(3) && hasCount(2) ? 25 : 0));

	function straight(n) {
		const sorted = [...new Set(dice.value)].sort((a, b) => a - b);

		let streak = 1;

		for (let i = 1; i < sorted.length; i++) {
			if (sorted[i] === sorted[i - 1] + 1) {
				streak++;

				if (streak >= n) {
					return true;
				}
			} else {
				streak = 1;
			}
		}

		return false;
	}

	const smallStraight = computed(() => (straight(4) ? 30 : 0));

	const largeStraight = computed(() => (straight(5) ? 40 : 0));

	const yahtzee = computed(() => (hasCount(5) ? 50 : 0));

	const upperScores = computed(() => dieTypes(0));
	const lowerScores = computed(
		() => threeKind.value + fourKind.value + smallStraight.value + largeStraight.value + yahtzee.value,
	);
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
							<br />
							Section
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Ones</td>
						<td>{{ dieTypes(1) }}</td>
					</tr>
					<tr>
						<td>Twos</td>
						<td>{{ dieTypes(2) }}</td>
					</tr>
					<tr>
						<td>Threes</td>
						<td>{{ dieTypes(3) }}</td>
					</tr>
					<tr>
						<td>Fours</td>
						<td>{{ dieTypes(4) }}</td>
					</tr>
					<tr>
						<td>Fives</td>
						<td>{{ dieTypes(5) }}</td>
					</tr>
					<tr>
						<td>Sixes</td>
						<td>{{ dieTypes(6) }}</td>
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
							<br />
							Section
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
		{{ upperScores + lowerScores }}
	</h2>
</template>

<style scoped>
	.scores {
		text-align: center;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
	}

	table,
	th,
	td {
		border: 1px solid;
		padding: 1px;
	}

	tbody {
		padding: 3px;
	}
</style>
