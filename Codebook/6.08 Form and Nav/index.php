<?php
	$products = [
		[
			"name" => "Rice",
			"number" => 1,
			"price" => 1.00
		],
		[
			"name" => "Broccoli",
			"number" => 2,
			"price" => 0.99
		],
		[
			"name" => "Cookies",
			"number" => 4,
			"price" => 1.20
		],
		[
			"name" => "Nuts",
			"number" => 0,
			"price" => 2.99
		]
	];

	$totalPrice = array_reduce(
		$products,
		function ($total, $product) {
			return $total + ($product["price"] * $product["number"]);
		},
		0
	);

	require "index.view.php";
?>
