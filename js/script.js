/**
 * Created by denis on 8/26/2017.
 */
$(document).ready(function () {
    var blue = '#069bdc';
    var green = '#0d9446';
    var darkBlue = '#133866';
    var total;
    $('.blue').click(function(){
       $('.personal_information, .your_account, #choose_plan').css("background-color", blue);
        $(".selected_blue").removeClass("selected_blue");
        $(".selected_green").removeClass("selected_green");
        $(".selected_dark_blue").removeClass("selected_dark_blue");
        $(".highlight_text").removeClass("highlight_text");
        $(".test").removeClass("test");
        $(".clu").removeClass("clu");
        $(this).addClass('selected_blue');
        $(this).children('.price').addClass('highlight_text');
        total = $(this).children('.price').text();
        $('.sum').html(total);
        console.log(total);

    });
    $('.green').click(function(){
        $('.personal_information, .your_account, #choose_plan').css("background-color", green);
        $(".selected_blue").removeClass("selected_blue");
        $(".selected_dark_blue").removeClass("selected_dark_blue");
        $(".selected_green").removeClass("selected_green");
        $(".highlight_text").removeClass("highlight_text");
        $(".test").removeClass("test");
        $(".clu").removeClass("clu");
        $(this).addClass('selected_green');
        $(this).find('.price_green').addClass('test');
        total = $(this).children('.price_green').text();
        $('.sum').html(total);
        console.log(total);
    });
    $('.dark_blue').click(function(){
        $('.personal_information, .your_account, #choose_plan').css("background-color", darkBlue);
        $(".selected_blue").removeClass("selected_blue");
        $(".selected_green").removeClass("selected_green");
        $(".selected_dark_blue").removeClass("selected_dark_blue");
        $(".highlight_text").removeClass("highlight_text");
        $(".test").removeClass("test");
        $(".clu").removeClass("clu");
        $(this).addClass('selected_dark_blue');
        $(this).find('.price_dark_blue').addClass('clu');
        total = $(this).children('.price_dark_blue').text();
        $('.sum').html(total);
        console.log(total);
    });
});