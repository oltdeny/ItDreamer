var result;
function isJSON(data) {
    try {
        JSON.parse(data);
    } catch (e) {
        return false;
    }
    return true;
}
function functionForLog(data) {
    result = data.split(" ");
    if(result[0] == 1 || result[0] == 0){
        $('#append').empty();
        $('#clear').empty();
        location.reload();
    }else{
        $('#errors').html("Неверный логин или пароль");
    }
}
function functionForReg(data) {
    result = data.split("<br>");
    if(result[0]){
        $('#append').empty();
        $('#clear').empty();
        $('#append').html(result[1]);
    }
    else{
        $('#errors').html(result[1]);
    }

}
function funcShow(data) {
    result = data.split("<br>");
    if(result.length == 1){
        $('#errors').html(result[0]);
    }
    else{
        $('#append').empty();
        $('#messages').html(result[0]);
        $('#append').append("<table>");
        for(var i = 1; i < result.length; i++){
            if(result[i] == ""){
                result.splice(i, 1);
                continue;
            }
            result[i] = result[i].split(" ");
            $('#append').append("<tr>");
            $('#append').append("<td>" + result[i][0]+ "</td>\n" +
                "<td>" + result[i][1]+ "</td>" + "<td>" + result[i][2]+ "</td>" + "<td>" + result[i][3]+ "</td>" + "<td><input type='checkbox' id='" + result[i][3] + "'/>" + "</td>");
            $('#append').append("</tr>");
        }
        $('#append').append("</table>");
    }
}
function ChangeUser(data) {
    if(!isJSON(data)){
        $('#errors').html(data);
    }
    else{
        $('#append').empty();
        var result = JSON.parse(data);
        $('#append').append("<div class=\"reg_form\">\n" +
            "<label for=\"nickname\">Логин</label><input type=\"text\" id=\"nickname\" name=\"nickname\" placeholder=\"Имя пользователя\"><br>\n" +
            "<label for=\"surname\">Фамилия</label><input type=\"text\" id=\"surname\" name=\"surname\" placeholder=\"Фамилия\"><br>\n" +
            "<label for=\"name\">Имя</label><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Имя\"><br>\n" +
            "<label for=\"password\">Пароль</label><input type=\"text\" id=\"password\" name=\"password\" placeholder=\"Пароль\"><br>\n" +
            "<label for=\"admin\">Админ</label><input type=\"text\" id=\"admin\" name=\"admin\" placeholder=\"1 или 0\"><br>\n" +
            "<input class='buttons' type='button' id=\"changeUser\" value='Изменить'/>\n" +
            "</div>");
        $('#nickname').val(result.nickname);
        $('#name').val(result.name);
        $('#surname').val(result.surname);
        $('#password').val(result.password);
        $('#admin').val(result.admin);
        $('#changeUser').bind("click", function () {
            var nickname = $('#nickname').val();
            var surname = $('#surname').val();
            var name = $('#name').val();
            var password = $('#password').val();
            var admin = $('#admin').val();
            var errors = "";
            if(password == "")
                errors += "Введите пароль <br />";
            if(nickname == "")
                errors += "Введите логин <br />";
            if(surname == "")
                errors += "Введите Фамилию <br />";
            if(name == "")
                errors += "Введите Имя <br />";
            if(admin == "")
                errors += "Укажите свойство админа <br />";
            $('#errors').html(errors);
            if(errors == ""){
                $.ajax({
                    url: "scriptforadmin.php",
                    type: "post",
                    data: ({nickname: nickname, name: name, password: password, surname: surname, changeUser: 1, id: result.id, admin: admin}),
                    dataType: "html",
                    success: funcShow
                });
            }
        });
    }
}
$(document).ready(function () {
    /* Обработка нажатия клавиши вход */
    $('#input').bind("click", function(){
        $('#append').empty();
        $('#append').append("<div class=\"reg_form\">\n" +
            "<label for=\"nickname\">Логин</label><input type=\"text\" id=\"nickname\" name=\"nickname\" placeholder=\"Имя пользователя\"><br>\n" +
            "<label for=\"password\">Пароль</label><input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Пароль\"><br>\n" +
            "<input type='button' class='buttons' id='log' value='Вход'> " +
            "</div>");
        $('#log').bind("click", function(){
            var nickname = $('#nickname').val();
            var password = $('#password').val();
            var errors = "";
            if(password == "")
                errors += "Введите пароль <br />";
            if(nickname == "")
                errors += "Введите логин <br />";
            $('#errors').html(errors);
            if(errors == ""){
                $.ajax({
                    url: "scriptforadmin.php",
                    type: "post",
                    data: ({nickname: nickname, password: password, log: 1}),
                    dataType: "html",
                    success: functionForLog
                });
            }
        });

    });
    /* Обработка нажатия клавиши регистрация */
    $('#registration').bind("click", function(){
        $('#append').empty();
        $('#append').append("<div class=\"reg_form\">\n" +
            "<label for=\"nickname\">Логин</label><input type=\"text\" id=\"nickname\" name=\"nickname\" placeholder=\"Имя пользователя\"><br>\n" +
            "<label for=\"surname\">Фамилия</label><input type=\"text\" id=\"surname\" name=\"surname\" placeholder=\"Фамилия\"><br>\n" +
            "<label for=\"name\">Имя</label><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Имя\"><br>\n" +
            "<label for=\"password\">Пароль</label><input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Пароль\"><br>\n" +
            "<label for=\"password2\">Пароль повторно</label><input type=\"password\" id=\"password2\" name=\"password2\" placeholder=\"Пароль еще раз\"><br>\n" +
            "<input type='button' class='buttons' id='reg' value='Регистрация'>\n" +
            "</div>");
        $('#reg').bind("click", function(){
            var name = $('#name').val();
            var nickname = $('#nickname').val();
            var surname = $('#surname').val();
            var password = $('#password').val();
            var password2 = $('#password2').val();
            var errors = "";
            if(password != password2 && password != "")
                errors += "Пароли не совпадают <br />";
            if(password == "")
                errors += "Введите пароль <br />";
            if(name == "")
                errors += "Введите имя <br />";
            if(surname == "")
                errors += "Введите фамилию <br />";
            if(nickname == "")
                errors += "Введите логин <br />";
            $('#errors').html(errors);
            if(errors == ""){
                $.ajax({
                    url: "scriptforadmin.php",
                    type: "post",
                    data: ({nickname: nickname, password: password, password2: password2, name: name, surname: surname, reg: 1}),
                    dataType: "html",
                    success: functionForReg
                });
            }
        });

    });
    /* Обработка нажатия клавиши удалить */
    $('#delete').bind("click", function () {
        var ArrOfId = [];
        for(var i = 0; i < result.length; i++){
            if($("#" + result[i][3]).prop("checked")){
                ArrOfId.push(result[i][3]);
            }
        }
        if(ArrOfId.length){
            ArrOfId.join(" ");
            $('#errors').empty();
            $.ajax({
                url: "scriptforadmin.php",
                type: "post",
                data: ({delete: 1, ides: ArrOfId}),
                dataType: "html",
                success: funcShow
            });
        }
        else{
            $('#errors').html("Отметьте хотя бы один чекбокс");
            return;
        }

    });
    /* Обработка нажатия клавиши редактировать */
    $('#change').bind("click", function () {
        var ArrOfId = [];
        var id;
        for(var i = 0; i < result.length; i++){
            if($("#" + result[i][3]).prop("checked")){
                ArrOfId.push(result[i][3]);
                id = result[i][3];
            }
        }
        if(ArrOfId.length == 1){
            $('#errors').empty();
            $.ajax({
                url: "scriptforadmin.php",
                type: "post",
                data: ({change: 1, id: id}),
                dataType: "html",
                success: ChangeUser
            });
        }else if(ArrOfId.length > 1){
            $('#errors').html("Отметьте только один чекбокс");
            return;
        }
        else{
            $('#errors').html("Отметьте один чекбокс");
            return;
        }

    });
    $('#show').bind("click", function () {
        $('#errors').empty();
        $.ajax({
            url: "scriptforadmin.php",
            type: "post",
            data: ({show: 1}),
            dataType: "html",
            success: funcShow
        });
    });
    $('#addArticles').bind("click", function () {
        $('#append').empty();
        $('#errors').empty();
        $('#append').append("<form class=\"reg_form\">\n" +
            "    <input type=\"text\" id='title' placeholder=\"Заголовок статьи\">\n" +
            "    <textarea placeholder=\"Текст статьи\" id='news' class=\"matrix\"></textarea><br>\n" +
            "    <input class=\"buttons\" type=\"button\" id=\"add\" value=\"Готово\">\n" +
            "</form>");
        $('#add').bind("click", function () {
            var title = $('#title').val();
            var text = $('#news').val();
            var errors = "";
            if(title == "")
                errors += "Введите заголовок статьи <br />";
            if(text == "")
                errors += "Введите текст статьи <br />";
            $('#errors').html(errors);
            if(errors == ""){
                $.ajax({
                    url: "scriptForContent.php",
                    type: "post",
                    data: ({title: title, text: text, addArticles: 1}),
                    dataType: "html",
                    success: function(data){
                        $('#messages').html(data);
                    }
                });
            }
        });
    });
    $('#addNews').bind("click", function () {
        $('#append').empty();
        $('#messages').empty();
        $('#errors').empty();
        $('#append').append("<form class=\"reg_form\">\n" +
            "    <input type=\"text\" id='title' placeholder=\"Заголовок новости\">\n" +
            "    <textarea placeholder=\"Текст новости\" id='news' class=\"matrix\"></textarea><br>\n" +
            "    <input class=\"buttons\" type=\"button\" id=\"add\" value=\"Готово\">\n" +
            "</form>");
        $('#add').bind("click", function () {
            var title = $('#title').val();
            var text = $('#news').val();
            var errors = "";
            if(title == "")
                errors += "Введите заголовок новости <br />";
            if(text == "")
                errors += "Введите текст новости <br />";
            $('#errors').html(errors);
            if(errors == ""){
                $.ajax({
                    url: "scriptForContent.php",
                    type: "post",
                    data: ({title: title, text: text, addNews: 1}),
                    dataType: "html",
                    success: function(data){
                        $('#messages').html(data);
                    }
                });
            }
        });
    });

});
