<?php
$title = "Галерея";
include_once("head.php");
?>
<script src="scriptforgallery.js"></script>
<?php
include_once("header.php");
?>

<div class="all" style="margin-top: 30px">
    <div style="float: left">
        <img src="img/prev1.png" id="prev" style="width: 40px; height: 40px; margin-bottom: 25%; cursor: pointer;">
        <img src="" id="img" style="width: 960px; height: 540px">
        <img src="img/next1.png" id="next" style="width: 40px; height: 40px; margin-bottom: 25%; cursor: pointer;">
    </div>
    <div id="min" style="overflow: auto; width: 330px; height: 540px; float: left"></div>
</div>
<?php
include_once("footer.php");
?>