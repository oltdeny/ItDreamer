<?php
include_once("../head.php");
?>
<script src="scriptforlab3.js"></script>
<?php
include_once("../header.php");
?>
<div>
    Лабараторная работа 3<br>
    Формат ввода: запятая между элементами и точка с запятой между парами.<br>
    Элементы множества через запятую.<br>
</div>
<form class="reg_form">
    <input placeholder="Отношение" type="text" name="relatives" id="rel"><br>
    <input type="text" placeholder="Первое множество" name="lotA" id="lot"><br>
    <input class="buttons" type="button" value="Готово" onClick="Main3('rel', 'lot', m)" >
</form>

<br>
<div class="res" id="res3"></div>

<?php
include_once("../footer.php");
?>
