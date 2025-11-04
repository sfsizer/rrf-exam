/*----- courses section slick add -----*/
jQuery(document).ready(function($) {
    /*----- courses section slick add -----*/
    $("#slick-items").slick({ 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        responsive: [
        {
            breakpoint: 1040, // max-width: 1040px
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767, // max-width: 767px
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
    $("#mentor-items").slick({ 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        responsive: [
        {
            breakpoint: 1040, // max-width: 1040px
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767, // max-width: 767px
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
    $(".best-mentor-items").slick({ 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false
    });
    });