;(function ($) {
    "use strict";

    $(function () {
        $('.ba-works__slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [

                {
                    breakpoint: 1000,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: false,
                        arrows: true
                    }
                }
            ]
        });
    });
    $(function () {
        $('.ba-team__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 5000,
            responsive: [

                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {

                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    var map,
        pointPin = {lat: 48.7345, lng: 37.5822271},
        pointCenter = {lat: 48.7344591, lng: 37.5822271};
    function initMap() {
        map = new google.maps.Map(document.getElementById('ba-map'), {
            center: pointCenter,
            zoom: 14,
            disableDefaultUI: false,
            scrollwheel: false
        });
        var image = {
            url: '../assets/img/pin.svg'
        };
        var marker = new google.maps.Marker({
            position: pointPin,
            map: map,
            icon: image
        });
    }

    initMap();


    $('.scroll-top').click(function () {
        $('.overlay').trigger('click');
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

})(jQuery);