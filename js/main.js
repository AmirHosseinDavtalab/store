$(document).ready(function(){
    $('.user-icon').click(function(){
        $('.wrapper-login').addClass('opasity');
    });
    $('.close-icon').click(function(){
        $('.wrapper-login').removeClass('opasity');
    });
    $('.li-menu').click(function(){
        $('.ul-menu').toggle('fast');
        
    });
    $(".main-search-icon").click(function(){
        $(".bg-section").addClass("filter")
        $(".content").addClass("filter")
        $(".search").focus()
        $(".search-section-wrapper").addClass("search-section-up")
    });
    $(".close-icon").click(function(){
        $(".search-section-wrapper").removeClass("search-section-up")
        $(".bg-section").removeClass("filter")
        $(".content").removeClass("filter")
    });
});