<?php
include_once("../head.php");
?>
<script src="scriptforlab5.js"></script>
<?php
include_once("../header.php");
?>
<div>
    Лабараторная работа 5<br>
    Формат ввода: Пробел между элементами и перенос строки между строками.<br>
</div>
<form method="post" action="" class="reg_form">
    <textarea placeholder="Матрица" id="matrix" class="matrix"></textarea><br>
    <input class="buttons" type="button" id="submit" value="Готово" >
</form>
<br>
<div class="res" id="res5"></div>
<?php
include_once("../footer.php");
?>
