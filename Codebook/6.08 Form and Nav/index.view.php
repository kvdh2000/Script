<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title> Grocery List </title>

		<link rel="stylesheet" type="text/css" href="style.css">
	</head>

	<body>
		<nav>
			<a href="index.php">Overview</a> |
			<a href="create.php">Add Product</a>
		</nav>

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
	</body>
</html>
