<?php
if(isset($_POST['output']))
    header("Location: /myWorks.php");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Game</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="GameStyle.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div style="width: 100%">
    <div class="gameMenu" style="display: inline-block;">
        <input type="button" class="buttons" id="play" value="Играть!">
        <form method="post">
            <input type="submit" class="buttons" name="output" value="Выход.">
        </form>
        <div id="append">

        </div>
    </div>
    <div style="display: inline-block;">
        <canvas id="canvas" width="496px" height="700px"></canvas>
    </div>
</div>
<script src="GameScript.js"></script>
</body>
</html>