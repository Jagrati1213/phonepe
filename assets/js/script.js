
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
function menu(e){
  let list = document.querySelector("nav ul");
  e.name=== 'menu' ? (e.name="close",list.classList.add('top-[68px]'),list.classList.add('block'),list.classList.remove('hidden'),list.classList.add('z-[1110]')): (e.name="menu",list.classList.remove('top-[68px]'),list.classList.remove('block'),list.classList.add('hidden'),list.classList.remove('z-[1110]'));
}
AOS.init();
