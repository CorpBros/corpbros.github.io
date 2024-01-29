// $(document).ready(function(){
//     alert(jQuery.fn.jquery);
// } );  
//////////           nav


$("#nav-btn").on( "click", function() {
    $("#nav").addClass("active")
});
$("#nav a").on( "click", function() {
    $("#nav").removeClass("active")
});

jQuery(function($){
	$(document).mouseup( function(e) { 
		var div = $( "#nav" ); 
		if ( !div.is(e.target) 
            && div.has(e.target).length === 0 ) {
			$("#nav").removeClass("active");
		}
	});  
});
// if($("#nav").css("max-height") == 0) {
//     $("#nav").css("opacity","0");
// }
// else {
//     $("#nav").css("opacity","1");
// }
///////////////////////
$(".program-module").on( "click", function() {
    $(".program-module.active").removeClass("active");
    $(this).addClass("active");
} );

// $(".faq-questions-q").on( "click", function() {
//     $(".faq-questions-q.active").removeClass("active");
//     $(this).addClass("active");
// } );

$(".faq-questions-q").on( "click", function() {
    $(this).toggleClass("active");
} );

$("#a_r").hover(
    function() 
    {
        $("#u").css("right", "0");
        $("#b_bg").css("opacity", "0.7");
    },
    function() 
    {
        $("#u").css("right", "-1920px");
        $("#b_bg").css("opacity", "0");
    }
);

//                             попап обзоры


$(".review-item").on( "click", function() {
    $(".popup").addClass("active");
} );




jQuery(function($){
	$(document).mouseup( function(e) { 
		var div = $( ".popup-body" ); 
		if ( !div.is(e.target) 
            && div.has(e.target).length === 0 ) {
			$(".popup").removeClass("active");
		}
	});  
});
// if($(".popup").hasClass("active")) {
//     $(".review-row").css("animation-play-state", "paused");
// }


//                             главная страница скрыть низ


// $(window).scroll(function() {
//     $("#ttt").removeClass("hidden")
// });

//                               трекингав

let bubbleX = $("#bubble").offset().left + $("#bubble").width() / 2;
let bubbleY = $("#bubble").offset().top + $("#bubble").height() / 2;
$(document).mousemove(function(e){

    
    

    let hX = (e.pageX - bubbleX) / 400;
    let hY = (e.pageY - bubbleY) / 400;
    $("#bubble").css({"transform":"translate(" + hX + "%,"+ hY + "%)"});
});



//                               АНИМАЦИЯ

let bottomScreen = 0;
// const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight;
// let animOffTop = $(".anim").offset().top;
// let animOffBottom = $(".anim").offset().top + $(".anim").height();
// let anim2OffTop = $(".anim2").offset().top;
// let anim2OffBottom = $(".anim2").offset().top + $(".anim2").height();

// //презагрузка
// $(document).ready(function(){
//     console.log(bottomScreen);
//     if(animOffTop < window.scrollY + windowInnerHeight && animOffBottom > window.scrollY) {
//         $(".anim").addClass("play");
//     }
//     if(anim2OffTop < window.scrollY + windowInnerHeight && anim2OffBottom > window.scrollY) {
//         $(".anim2").addClass("play");
//     }
// } );   


// $(document).scroll(function(){

//     bottomScreen = window.scrollY + windowInnerHeight;
//     console.log(bottomScreen);
//     if(animOffTop < bottomScreen && animOffBottom > window.scrollY) {
//         $(".anim").addClass("play");
//     }
//     if(anim2OffTop < bottomScreen && anim2OffBottom > window.scrollY) {
//         $(".anim2").addClass("play");
//     }
// });

let triggerOffTop = $(".trigger").offset().top + $(".trigger").height() / 3;
let triggerOffBottom = $(".trigger").offset().top + $(".trigger").height();
let trigger2OffTop = $(".trigger2").offset().top + $(".trigger2").height() / 3;
let trigger2OffBottom = $(".trigger2").offset().top + $(".trigger2").height();

//презагрузка
$(document).ready(function(){
    console.log(bottomScreen);
    if(triggerOffTop < window.scrollY + windowInnerHeight && triggerOffBottom > window.scrollY) {
        $(".anim").addClass("play");
    }
    if(trigger2OffTop < window.scrollY + windowInnerHeight && trigger2OffBottom > window.scrollY) {
        $(".anim2").addClass("play");
    }
} );   


$(document).scroll(function(){

    bottomScreen = window.scrollY + windowInnerHeight;
    console.log(bottomScreen);
    if(triggerOffTop < bottomScreen && triggerOffBottom > window.scrollY) {
        $(".anim").addClass("play");
    }
    if(trigger2OffTop < bottomScreen && trigger2OffBottom > window.scrollY) {
        $(".anim2").addClass("play");
    }
});





$("#buybtn").click(function() {
    $(".buy-right").toggleClass("active");
});
$(".course-buy-left").click(function() {
    $(".buy").toggleClass("active");
});
jQuery(function($){
	$(document).mouseup( function(e) { 
		var div = $(".buy-content"); 
		if ( !div.is(e.target) 
            && div.has(e.target).length === 0 ) {
			$(".buy").removeClass("active");
            $(".buy-right").removeClass("active");
		}
	});  
});