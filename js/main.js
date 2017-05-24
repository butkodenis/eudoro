    //

    $.noConflict();

    jQuery(document).ready(function ($) {

        /// анимация
        new WOW().init();



        // плавная прокрутка
        $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 1500);
            return false;
        });
        // фильтр
        $('#filtr-2').click(function () {
            $('.food-menu-block img').attr("src",'images/item1.png');
        });
        $('#filtr-3').click(function () {
            $('.food-menu-block img').attr("src",'images/item4.png');
        });
        $('#filtr-1').click(function () {
            $('#img-menu-1').attr("src",'images/item1.png');
            $('#img-menu-2').attr("src",'images/item2.png');
            $('#img-menu-3').attr("src",'images/item3.png');
            $('#img-menu-4').attr("src",'images/item4.png');
            $('#img-menu-5').attr("src",'images/item3.png');


        });



        // фильтрация блоков портфолио  ( незабыть .mix { display: none;})
        //
        // $(function(){
        //     $("#filter-block").mixItUp({
        //
        //     });
        // });

        //   show more

        // size_li = $("#filter-block > div").size();
        // x=9;
        // console.log(size_li);
        // $('#filter-block  > div:lt('+x+')').show();
        // $('#loadMore').click(function () {
        //     x = (x+3 <= size_li) ? x+3 : size_li;
        //     $('#filter-block > div:lt('+x+')').show();
        // });



        // изминение при прокрутке nav
        if ($('#service').length > 0) {
            (function () {
                $(window).on("scroll", function() {
                    if ($(window).scrollTop() > 50) $('.navbar').addClass('sticky') && $('#logo').addClass('.logo_sm');
                    else $('.navbar').removeClass('sticky')&& $('#logo').removeClass('.logo_sm');
                });
            })();
        }



    });





