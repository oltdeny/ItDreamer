<?php
session_start();
if(isset($_POST['output'])){
    unset ($_SESSION['id']);
    header("Location: index.php");
    exit();
}
$title = "Личный кабинет";
include_once("head.php");
?>
<script src="scriptforadmin.js"></script>
<?php
include_once("header.php");
if(empty($_SESSION)) {
    ?>
    <div id="clear" style="margin-top: 10px">
        <span>Здравствуйте, войдите в личный кабинет или зарегистрируйтесь</span>
        <span class="buttons" id="input" title="Войти в личный кабинет">Вход</span>
        <span class="buttons" id="registration" title="Зарегистрироваться на сайте">Регистрация</span>
    </div>
    <?php
}
else{
    $mysqli = new mysqli("localhost", "mysql", "mysql", "users");
    $mysqli->query("SET NAMES 'utf8'");
    $id = $_SESSION['id'];
    $success = $mysqli->query("SELECT * FROM users WHERE id= '$id'");
    $arr = mysqli_fetch_array($success);
    if($arr['admin']) {

        ?>
        <div id=\"containerForBtns\">
            <span>Здравствуйте, вы вошли как админ. Вы можете удалять и редактировать пользователей.</span>
            <form action="" method="POST">
                <span class="buttons" id="show">Загрузить список пользователей</span>
                <span class="buttons" id="delete">Удалить</span>
                <span class="buttons" id="change">Редактировать</span>
                <span class="buttons" id="addNews">Добавиь новость</span>
                <span class="buttons" id="addArticles">Добавиь статью</span>
                <input class="buttons" name="output" type="submit" value="Выход" />
                </form>
            </div>
        <?php
    }
    else{
        ?>
        <div id="containerForBtns">
            <span>Здравствуйте <?= $arr['surname'] . " " . $arr['name'] ?>
                вы вошли в личный кабинет под логином: <?= $arr['nickname'] ?></span>
            <p>Вы можете посмотреть статьи, фотогаллерею, поиграть в игру.
                Приятного времяпровождения.
            </p>
            <form action="" method="POST">
                <input class="buttons" name="output" type="submit" value="Выход"/>
            </form>
        </div>
        <?php
    }
}
?>
<div id="messages"></div>
<div id="append"></div>
<div id="errors" style="color: #ff253a"></div>
<?php
include_once("footer.php");
?>

