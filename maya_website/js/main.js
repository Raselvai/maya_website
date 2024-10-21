/*
 * Template Name: Qude - Cleaner Business html Template
 * Author: extratheme - (https://themeforest.net/user/extratheme)
 * Version: 1.0
 * Copyright 2020 extratheme

===========================================
    
    All jQuery section Include: 

    01. prealoder start
    02. smooth scroll start
    03. sticky header start
    04. dropdown menu start
    05. dropdown menu show start
    06. dropdown menu hide start
    07. show or hide start
    08. animate scroll start
    09. hamburger menu start
    
===========================================


*/


(function ($) {
    "use strict";

    $(window).on('load', function(){

        //01. prealoder start
        $("#preloader").delay(1800).fadeOut("slow");

    });

    $(document).ready(function () {

        //02. smooth scroll start
        function smoothScroolInit() {
            $('.back-to-top').smoothScroll({
                speed: 1000
            });
        }
        smoothScroolInit();

        //03. sticky header start
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll <5) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();

        //04. dropdown menu start 
        $(window).on('load resize', function(){
            if (window.matchMedia('(min-width: 992px)').matches){
                $('.dropdown .dropdown-toggle').on('click', function(event){
                    return false;
                    event.stopPropagation();
                });
            }
        });

        //05. dropdown menu show start
        $('.dropdown').on('show.bs.dropdown', function(e){
            $(this).find('.sub_menu').first().stop(true, true).slideDown(300);
        });
        
        //06. dropdown menu hide start
        $('.dropdown').on('hide.bs.dropdown', function(e){
            $(this).find('.sub_menu').first().stop(true, true).slideUp(200);
        });

        //07. show or hide start
        $(window).on('scroll', function (event) {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200);
            } else {
                $('.back-to-top').fadeOut(200);
            }
        });

        //08. animate scroll start
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        //09. hamburger menu start
        $('.hamburger_menu, .overlay').on('click', function () {
            $('.hamburger_menu .line_top').toggleClass('current');
            $('.hamburger_menu .line_center').toggleClass('current');
            $('.hamburger_menu .line_bottom').toggleClass('current');
            $('header nav').toggleClass('open');
            $('.overlay').toggleClass('overlay_add');
        });

        //11. counter area start
        $('.counter_wrapper').on('inview', function(event, visible) {
        if (visible) {
            $(this).find('.counter').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
        });

        //10. brand slider start
        function brand_carouselInit() {
            $('.owl-carousel.brand_slider').owlCarousel({
                dots: false,
                loop: true,
                margin: 60,
                stagePadding: 0,
                autoWidth:true,
                autoplay: true,
                autoplayTimeout: 2500,
                smartSpeed:3000,
                autoplayHoverPause: false,
                // responsive: {
                //     0: {
                //         items: 1
                //     },
                //     768: {
                //         items: 2,
                //     },
                //     992: {
                //         items: 5
                //     }
                // }
            });
        }
        brand_carouselInit();

        //13. home slider start
        function default_home_carouselInit() {
            $('.owl-carousel.default_home_slider').owlCarousel({
                dots: false,
                loop: true,
                margin: 0,
                stagePadding: 0,
                animateOut: 'fadeOut',
                nav: true,
                navText: ['<span>Previous</span>','<span><img class="img-fluid" src="img/service_details/default_home_arrow.svg" alt=""></span>'],
                items: 1,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed:4000,
                autoplayHoverPause: false,
            });
        }
        default_home_carouselInit();



    });

})(jQuery);