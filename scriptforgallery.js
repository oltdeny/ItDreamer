var currentimage = 0;
$(document).ready(function () {
    var images = ["1.jpg", "2.jpg", "3.jpg","4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];
    for(var i = 0; i < images.length; i++){
        var way = "img/" + images[i];
        $('#min').append("<img src=\""+ way + "\" id=\"min"+ i +"\" class=\"minpictures\" style=\"cursor: pointer; width: 320px; height: 180px\">");
    }
    $('#img').attr("src", "img/" + images[currentimage]);
    $('#min0').attr("style", "border:2px solid darkred;");
    $('.minpictures').bind("click", function () {
        var id = $(this).attr('id');
        currentimage = +id.slice(3);
        setImage();
    });
    $('#next').bind("click", function () {
        if(currentimage < images.length - 1){
            currentimage++;
            setImage();
            SlowScroll();
        }
    });
    $('#prev').bind("click", function () {
        if(currentimage != 0){
            currentimage--;
            setImage();
            SlowScroll();
        }
    });
    function setImage() {
        $('#img').attr("src", "img/" + images[currentimage]);
        $('#img').fadeToggle("fast");
        $('#img').fadeToggle("fast");
        $('.minpictures').attr('style', 'cursor: pointer; width: 320px; height: 180px');
        $('#min' + currentimage).attr("style", "border:2px solid darkred; ");
    }
    function SlowScroll() {
        var way = '#min' + currentimage;
        $('#min').animate({
            scrollTop: $(way).offset().top + 100
        }, 500);
        return false;
    }


});