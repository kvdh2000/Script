<?php
	require_once __DIR__ . '/../Database.php';

	$config = require __DIR__ . '/../config.php';

	$db = new Database($config);

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		if (
      empty($_POST['name']) ||
      $_POST['quantity'] < 1 ||
			$_POST['price'] <= 0
    ) {
      die('Invalid input');
    }
	
		$db->query(
			"INSERT INTO groceries (name, quantity, price)
			 VALUES (:name, :quantity, :price)",
			[
				'name' => $_POST['name'],
				'quantity' => (int) $_POST['quantity'],
				'price' => (float) $_POST['price']
			]
		);

		header('Location: /');
		exit();
	}

	require __DIR__ . '/../views/create.view.php';
?>
