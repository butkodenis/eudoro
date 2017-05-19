/**
 * Created by butko on 19.05.2017.
 */
$(window).load(function () {
    $('.nav').addStyleClass('animated bounceOutLeft')
});
$(document).ready(function(){
    $(".food-menu-block").mouseover(function(){
        $("#img").animate({
            // left: '250px',
            // opacity: '0.5',
            // height: '110$',
            // width: '110%',
            height: 'toggle'
        });
    });
});