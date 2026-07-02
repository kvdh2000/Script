<?php
	class Validator {
    public static function string($value, $min = 1, $max = INF) {
      $value = trim($value);

       return is_string($value)
         && strlen($value) >= $min
         && strlen($value) <= $max;
    }

    public static function integer($value, $min = 1) {
      return filter_var($value, FILTER_VALIDATE_INT) !== false
      	&& $value >= $min;
    }

    public static function decimal($value, $min = 0, $max = INF) {
      return is_numeric($value)
        && $value >= $min
        && $value <= $max;
    }
	}
?>
