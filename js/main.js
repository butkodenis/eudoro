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




        // фильтрация блоков портфолио  ( незабыть .mix { display: none;})

        $(function(){
            $("#filter-block").mixItUp({

            });
        });

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
                    if ($(window).scrollTop() > 50) $('.navbar').addClass('sticky');
                    else $('.navbar').removeClass('sticky');
                });
            })();
        }



    });





