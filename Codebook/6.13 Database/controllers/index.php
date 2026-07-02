<?php
	require_once __DIR__ . '/../functions.php';
	require_once __DIR__ . '/../Database.php';

	$config = require __DIR__ . '/../config.php';

	$db = new Database($config);

	$products = $db
		->query("SELECT * FROM groceries")
		->fetchAll(PDO::FETCH_ASSOC);

	$totalPrice = array_reduce(
		$products,
		function ($total, $product) {
			return $total + ($product['price'] * $product['quantity']);
		},
		0
	);

	require __DIR__ . '/../views/index.view.php';
?>
