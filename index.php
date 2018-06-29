<?php
$title = "Главная";
include_once("head.php");
?>
    <script src="scriptforadmin.js"></script>
<?php
include_once("header.php");
$mysqli = new mysqli("localhost", "mysql", "mysql", "users");
$mysqli->query("SET NAMES 'utf8'");
$res = $mysqli->query("SELECT * FROM `News` ORDER BY `id` DESC");
?>
    <div id="hello">
        <h1>Приветствуем вас на сайте ItDreamer.com</h1>
        <p>Здесь вы можете почитать статьи и новости в сфере IT. Посмотреть красивые фотографии в галлерее.</p>
        <p>Так же вы можете начать изучать дискретную математику, оценив программы, реализующие математическую логику!</p>
    </div>
    <div id="news" style="margin-top: 10px; display: inline-block; width: 49%; margin-right: 10px">
        <h1 style="color: darkred">IT-Новости</h1>
        <div id="addnew" style="overflow: auto; height: 400px;">
            <div>
                <?php
                while($row = mysqli_fetch_array($res)) {?>
                <h2><?=$row['title']?></h2>
                <span><?=$row['text']?></span>
                <hr>
                    <?php
                }?>
            </div>
        </div>
    </div>
    <div id="developer" style="display: inline-block; width: 33%; height: 33%">
        <h1>Разработчик сайта:</h1>
        <img src="img/developer.jpg">
    </div>
<?php
include_once("footer.php");
?>