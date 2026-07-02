<?php
	class Database {
		public $connection;

		public function __construct($config) {
			$dsn = "mysql:host={$config['host']};port={$config['port']};dbname={$config['dbname']};charset=utf8mb4";

			$this->connection = new PDO(
				$dsn,
				$config['user'],
				$config['password']
			);
		}

		public function query($query) {
			return $this->connection->query($query);
		}
	}
?>
