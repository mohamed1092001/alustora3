
$(".team .card button").click(function(){
    $(this).closest(".card").toggleClass("active")
})


$(".nav-son .close-btn").click(function(){
    $(".nav-son").removeClass("mobile-active")
})

$(".nav-btn").click(function(){
    $(".nav-son").addClass("mobile-active")
})

// window.onload = function () {
//     window.scrollTo(0, 0);
// };