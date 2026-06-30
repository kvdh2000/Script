<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Add Product</title>

		<link rel="stylesheet" href="style.css">
	</head>

	<body>
		<nav>
			<a href="index.php">Overview</a> |
			<a href="create.php">Add Product</a>
		</nav>

		<h1>Add Product</h1>

		<form class="product-form">
			<div>
				<label for="name">Name</label><br>
				<input type="text" id="name" name="name">
			</div>

			<div>
				<label for="quantity">Quantity</label><br>
				<input type="number" id="quantity" name="quantity">
			</div>

			<div>
				<label for="price">Unit Price</label><br>
				<input type="number" id="price" name="price" step="0.01">
			</div>

			<button type="submit">Add Product</button>
		</form>

	</body>
</html>
