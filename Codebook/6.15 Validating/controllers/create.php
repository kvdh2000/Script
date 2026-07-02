<?php
	require_once __DIR__ . '/../Validator.php';
	require_once __DIR__ . '/../Database.php';

	$config = require __DIR__ . '/../config.php';

	$db = new Database($config);

	$errors = [];

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (!Validator::string($_POST['name'])) {
      $errors['name'] = 'Name must be a valid string';
    }

    if (!Validator::integer($_POST['quantity'], 1)) {
      $errors['quantity'] = 'Quantity must be at least 1';
    }

    if (!Validator::decimal($_POST['price'], 0.01)) {
      $errors['price'] = 'Price must be greater than 0';
    }

    if (empty($errors)) {
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
	}

	require __DIR__ . '/../views/create.view.php';
?>
