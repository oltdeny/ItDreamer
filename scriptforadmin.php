<?php
session_start();
$mysqli = new mysqli("localhost", "mysql", "mysql", "users");
$mysqli->query("SET NAMES 'utf8'");
if($_POST['log']){
    $nickname = htmlspecialchars($_POST['nickname']);
    $password = htmlspecialchars($_POST['password']);
    $success = $mysqli->query("SELECT * FROM `Users` WHERE nickname = '$nickname' AND password = MD5('$password')");
    $arr = mysqli_fetch_array($success);
    if($arr == null){
        echo "Неверный логин или пароль.";
    }else{
        $_SESSION['id'] = $arr['id'];
        echo $arr['admin']." ";
        echo $arr['name']." ";
        echo $arr['surname']." ";
        echo $arr['nickname']." ";
        echo $arr['id'];
    }
}
if($_POST['reg']){
    $name = htmlspecialchars($_POST['name']);
    $surname = htmlspecialchars($_POST['surname']);
    $nickname = htmlspecialchars($_POST['nickname']);
    $password = htmlspecialchars($_POST['password']);
    $password2 = htmlspecialchars($_POST['password2']);
    if($password != $password2 && !empty($password))
        $errors .= "Пароли не совпадают <br />";
    if(empty($password))
        $errors .= "Введите пароль <br />";
    if(empty($nickname))
        $errors .= "Введите логин <br />";
    if(empty($surname))
        $errors .= "Введите Фамилию <br />";
    if(empty($name))
        $errors .= "Введите Имя <br />";
    if(empty($errors)) {
        $success = $mysqli->query("INSERT INTO `Users` (`nickname`, `surname`, `name`, `password`) VALUES ('$nickname', '$surname', '$name', MD5('$password'))");
        if (!$success) {
            echo false."<br>";
            echo "Такой пользователь уже существует";
        }
        else {
            echo true."<br>";
            echo "Поздравляю! Вы зарегистрированы!";
        }
    }

}
if($_POST['delete']){
    $ides =  $_POST['ides'];
    for ($i = 0; $i < count($ides); $i++){
        $success = $mysqli->query("SELECT `admin` FROM `Users` WHERE id = '$ides[$i]'");
        $arr = mysqli_fetch_array($success);
        if($arr['admin'] == 0){
            $success = $mysqli->query("DELETE FROM `Users` WHERE id = '$ides[$i]'");
            echo "Пользователь успешно удален."."<br>";
            Input($mysqli);
        }
        else{
            echo "Нельзя редактировать или удалять админа";
        }
    }
}
if($_POST['change']){
    $id = $_POST['id'];
    $success = $mysqli->query("SELECT * FROM `Users` WHERE `id` = '$id'");
    if(!$success){
        echo "Такого пользователя не существует";
    }
    else {
        $result = mysqli_fetch_array($success);
        if($result['admin'] == 0){
            $result = json_encode($result);
            echo $result;
        }
        else{
            echo "Нельзя редактировать или удалять админа"."<br>";
        }
    }
}
if($_POST['changeUser']){
    $name = htmlspecialchars($_POST['name']);
    $surname = htmlspecialchars($_POST['surname']);
    $nickname = htmlspecialchars($_POST['nickname']);
    $password = htmlspecialchars($_POST['password']);
    $id = htmlspecialchars($_POST['id']);
    $success = $mysqli->query("SELECT * FROM `Users` WHERE `nickname` = '$nickname'");
    $arr = mysqli_fetch_array($success);
    if($arr != null){
        echo "Пользователь с таким никнэймом уже существует";
    }else{
        echo "Данные пользователя успешно изменены"."<br>";
        $success = $mysqli->query("UPDATE `Users` SET `nickname` = '$nickname', `name` = '$name', `surname` = '$surname', `password` = MD5('$password'), `admin` = '$admin' WHERE `Users`.`id` = '$id';");
        Input($mysqli);
    }

}
if($_POST['show']){
    echo "Пользователи:"."<br>";
    Input($mysqli);
}
function Input($mysqli){
    $res = $mysqli->query("SELECT * FROM users");
    while($row = mysqli_fetch_array($res)) {
        echo $row['nickname']." ";
        echo $row['surname']." ";
        echo $row['name']." ";
        echo $row['id']."<br>";
    }
}
$mysqli->close();
?>