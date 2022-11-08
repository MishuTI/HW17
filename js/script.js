$(function(){
    $(".faq1_p1").hide();
    $(".faq1_p2").hide();
    $(".faq1_p3").hide();

    $(".faq1_head").click(function(){
        $(".faq1_p1").slideToggle(500);
    });
    $(".faq2_head").click(function(){
        $(".faq1_p2").slideToggle(500);
    });
    $(".faq3_head").click(function(){
        $(".faq1_p3").slideToggle(500);
    });
    

});