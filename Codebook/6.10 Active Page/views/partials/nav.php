<nav>
	<a
		class="<?= urlIs('/controllers/index.php') ? 'active' : '' ?>"
		href="index.php"
	>
		Overview
	</a>
	<a
		class="<?= urlIs('/controllers/create.php') ? 'active' : '' ?>"
		href="create.php"
	>
		Add Product
	</a>
</nav>
