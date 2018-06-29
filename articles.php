<?php
$title = "Статьи";
include_once("head.php");
include_once("header.php");
$mysqli = new mysqli("localhost", "mysql", "mysql", "users");
$mysqli->query("SET NAMES 'utf8'");
$res = $mysqli->query("SELECT * FROM `Articles`");
?>
<table>
<?php
  while($row = mysqli_fetch_array($res)) {?>
    <tr>
        <td><h2><?=$row['title']?></h2></td>
    </tr>
    <tr>
        <td><?=$row['text']?></td>
    </tr>
    <?php
  }?>
</table>
<?php
include_once("footer.php");
?>