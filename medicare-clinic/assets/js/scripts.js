jQuery(document).ready(function($) {
    /*----- courses section slick add -----*/
    $("#doctor-slick").slick({ 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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

    $("#review-slick").slick({ 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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
});
