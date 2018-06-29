function funcSuccess(data) {
    $('#res5').text("");
    var result = data.split("<br>");
    for(var i = 0; i < result.length; i++){
        $('#res5').append(result[i]);
        $('#res5').append("<br>");
        if(i == (result.length/2) - 1){
            $('#res5').append("<br>");
        }
    }
}
$(document).ready(function () {
    $('#submit').bind("click", function () {
        var matrix = $('#matrix').val();
        $.ajax({
            url: "scriptforlab5.php",
            type: "post",
            data: ({matrix: matrix}),
            dataType: "html",
            success: funcSuccess
        });
    });
});