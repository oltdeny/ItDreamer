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
<div class="reg_form">
    <input type="button" class="buttons" id="play" value="Играть!">
    <form method="post">
        <input type="submit" class="buttons" name="output" value="Выход.">
    </form>
</div>
<div id="append">

</div>
    <canvas id="canvas" width="288px" height="512px"></canvas>
    <script src="GameScript.js"></script>
</body>
</html>