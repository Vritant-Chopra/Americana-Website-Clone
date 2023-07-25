var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var counter = 1;
setInterval(function(){
    document.getElementById("radio"+counter).checked = true;
    counter++;
    if(counter>4){
        counter=1;
    }

}, 5000);