<?php require "partials/header.php"; ?>
<?php require "partials/nav.php"; ?>

<table>
	<thead>
		<tr>
			<th scope="col"> Product </th>
			<th scope="col"> Price </th>
			<th scope="col"> Number </th>
			<th scope="col"> Subtotal </th>
		</tr>
	</thead>
	<?php foreach ($products as $product) : ?>
		<tr>
			<td>
				<?= $product["name"] ?>
			</td>
			<td class="price">
				<?= number_format($product["price"], 2) ?>
			</td>
			<td>
				<?= $product["number"] ?>
			</td>
			<td class="price">
				<?= number_format($product["price"] * $product["number"], 2) ?>
			</td>
		</tr>
	<?php endforeach; ?>
	</tbody>
	<tfoot>
		<tr>
			<th scope="row" colspan="3"> Total </th>
			<td class="price"><?= number_format($totalPrice, 2) ?></td>
		</tr>
	</tfoot>
</table>

<?php require "partials/footer.php"; ?>
