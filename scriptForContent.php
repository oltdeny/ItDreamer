<?php
session_start();
$mysqli = new mysqli("localhost", "mysql", "mysql", "users");
$mysqli->query("SET NAMES 'utf8'");
if($_POST['addArticles']){
    $title = $_POST['title'];
    $text = $_POST['text'];
    $success = $mysqli->query("INSERT INTO `Articles` (`title`, `text`) VALUES ('$title', '$text')");
    if($success){
        echo "Статья успешно добавлена";
    }
}
if($_POST['addNews']){
    $title = $_POST['title'];
    $text = $_POST['text'];
    $success = $mysqli->query("INSERT INTO `News` (`title`, `text`) VALUES ('$title', '$text')");
    if($success){
        echo "Новость успешно добавлена";
    }
}










?>