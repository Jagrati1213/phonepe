
$(document).ready(function () {
    console.log("ready!");
    // Main Slider
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
    });

    //   No secure slider
    $(".no-slider").slick({
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        autoplay:true,
        responsive: [
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
              }
            }]
      });
      
});
AOS.init();
