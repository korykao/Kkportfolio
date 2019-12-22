$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").css('z-index', 3000);
    $(".navTrigger").css('z-index', 3001);
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$('a').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

