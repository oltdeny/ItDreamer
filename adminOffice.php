<?php
session_start();
if(isset($_POST['output'])){
    unset ($_SESSION['id']);
    header("Location: index.php");
    exit();
}
include_once("head.php");
?>
<script src="scriptforadmin.js"></script>
<?php
include_once("header.php");
?>
    <div id="containerForBtns">
        <form action="" method="POST">
            <span class="buttons" id="delete">Удалить</span>
            <span class="buttons" id="change">Редактировать</span>
            <span class="buttons" id="show">Показать пользователей</span>
            <input class="buttons" name="output" type="submit" value="Выход" />
        </form>
    </div>
<div id="body"></div>
<div id="result"></div>
<div id="errors"></div>
<?php
include_once("footer.php");
?>