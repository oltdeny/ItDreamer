<?php
session_start();
if(isset($_POST['output'])){
    unset ($_SESSION['id']);
    header("Location: index.php");
    exit();
}
if(empty($_SESSION)){
    include_once("header.php");
    echo "Здравствуйте, войдите в личный кабинет или зарегистрируйтесь)";
    ?>
    <a class="hrefs" href="authorization.php" title="Войти в личный кабинет">Вход</a>
    <a class="hrefs" href="registration.php" title="Зарегистрироваться на сайте">Регистрация</a>
    <?php
    include_once("footer.php");
    exit();
}
else{
    $mysqli = new mysqli("localhost", "mysql", "mysql", "users");
    $mysqli->query("SET NAMES 'utf8'");
    $id = $_SESSION["id"];
    $success = $mysqli->query("SELECT * FROM users WHERE id = '$id'");
    $mysqli->close();
    $arr = mysqli_fetch_array($success);
    if($arr['admin'] == 1){
        header("Location: adminOffice.php");
    }
    include_once("header.php");
    echo "Здравствуйте, " .$arr["surname"]." ".$arr["name"].", ваш логин: ".$arr["nickname"].".";
    ?>
    <form action="" method="POST">
        <input name="output" type="submit" value="Выход" />
    </form>
    <?php
    include_once("footer.php");
}
?>