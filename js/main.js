
$(".team .card button").click(function(){
    $(this).closest(".card").toggleClass("active")
})


$(".nav-son .close-btn").click(function(){
    $(".nav-son").removeClass("mobile-active")
})

$(".nav-btn").click(function(){
    $(".nav-son").addClass("mobile-active")
})

$(".questions .questions-con .question-box .question").click(function () {
    $(this).closest(" .question-box").find(".answer").slideToggle();
    $(this).closest(" .question-box").find(".icon").toggleClass('active');
})