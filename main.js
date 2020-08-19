$(document).ready(function () {
    $('.menu').on('click', function (){
        $(this).toggleClass('open');
        $( '.top-nav').toggleClass('open');
    });

      $('.top-nav .nav-link').on('click', function (){
        $('.menu').removeClass('open');
        $( '.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function (){
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function (){
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS. init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});


function BtnFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readmore");

  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function BtnFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("readmore2");

  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function BtnFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("readmore3");

  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }