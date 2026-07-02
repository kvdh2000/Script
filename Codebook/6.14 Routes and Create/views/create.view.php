<?php require "partials/header.php"; ?>
<?php require "partials/nav.php"; ?>

<h1>Add Product</h1>

<form
	method="POST"
	action="/create"
	class="product-form"
>
	<div>
		<label for="name">Name</label><br>
		<input
			type="text"
			id="name"
			name="name"
			required
		>
	</div>

	<div>
		<label for="quantity">Quantity</label><br>
		<input
			type="number"
			id="quantity"
			name="quantity"
			min="1"
			required
		>
	</div>

	<div>
		<label for="price">Unit Price</label><br>
		<input
			type="number"
		 	id="price"
		  name="price"
			min="0.01"
			step="0.01"
			required
		>
	</div>

	<button type="submit">Add Product</button>
</form>

<?php require "partials/footer.php"; ?>
