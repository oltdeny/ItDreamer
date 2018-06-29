<?php
include_once("../head.php");
?>
<script src="scriptforlab2.js"></script>
<?php
include_once("../header.php");
?>
<div>
Лабараторная работа 2<br>
Формат ввода: запятая между элементами и точка с запятой между парами.
</div>
<form class="reg_form">
    <label for="array">R:</label>
	<input type="text" name="array" id="arr"><br>
	<input class="buttons" type="button" value="Готово" onClick="Main2(1, m, 'arr')" >
</form>
<br>
<div class="res" id="res2"></div>
<?php
include_once("../footer.php");
?>