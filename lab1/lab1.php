<?php
include_once("../head.php");
?>
<script src="scriptforlab1.js"></script>
<?php
include_once("../header.php");
?>
<div>
Лабараторная работа 1<br>
Элементы массива должны иметь формат : нечётная цифра-любая цифра-буква(например, 12а).
</div>
<form class="reg_form">
    <label for="array1">Введите массив 1</label>
    <input type="text" name="array1" id="arr1"><br>
    <label for="array2">Введите массив 2</label>
    <input type="text" name="array2" id="arr2"><br>
    <label for="array3">Введите универсальное множество</label>
    <input type="text" name="array3" id="arr3"><br>
    <input class="buttons" type="button" value="Пересечение" onClick="Intersection1()">
    <input class="buttons" type="button" value="Объединение" onClick="union1()">
    <input class="buttons" type="button" value="Симетрическая разность" onClick="SymmDiff1()">
    <input class="buttons" type="button" value="Дополнение A относительно B" onClick="Addition1(1, m1, 'arr1', 2, m2, 'arr2')">
    <input class="buttons" type="button" value="Дополнение B относительно A" onClick="Addition1(2, m2, 'arr2', 1, m1, 'arr1')">
    <input class="buttons" type="button" value="Отрицание A" onClick="Addition1(1, m1, 'arr1', 3, mu, 'arr3')">
    <input class="buttons" type="button" value="Отрицание B" onClick="Addition1(2, m2, 'arr2', 3, mu, 'arr3')">
</form>
<br>
<div class="res" id="resforlab1"></div>
<?php
include_once("../footer.php");
?>


