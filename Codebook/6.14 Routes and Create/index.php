<?php
	require_once "functions.php";
	require_once "router.php";
	
	routeToController($_SERVER["REQUEST_URI"], $routes);
?>
