function funcSuccess(data) {
    $('#res4').text("");
    var result = data.split("<br>");
    for(var i = 0; i < result.length; i++){
        $('#res4').append(result[i]);
        $('#res4').append("<br>");
        if(i == (result.length/2) - 1){
            $('#res4').append("<br>");
        }
    }
}
$(document).ready(function () {
    $('#submit').bind("click", function () {
        var matrix = $('#matrix').val();
        $.ajax({
            url: "scriptforlab4.php",
            type: "post",
            data: ({matrix: matrix}),
            dataType: "html",
            success: funcSuccess
        });
    });
});