---
  layout: null
sitemap:
exclude: 'yes'
---

  $(document).ready(function () {
    {% if site.disable_landing_page != true %}
    $('a.About-button').click(function (e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
      currentWidth = $('.panel-cover').width()
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.content-wrapper').addClass('animated slideInRight')
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { })
      }
    })

    if (window.location.hash && window.location.hash == '#About') {
      $('.panel-cover').addClass('panel-cover--collapsed')
    }

    if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
    {% endif %}

    $('.btn-mobile-menu').click(function () {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    $('.navigation-wrapper .About-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

  })

  let slideIndex = 1;
  let slideIndex1 = 1;
  let slideIndex2 = 1;
  let slideIndex3 = 1;

  showSlides(slideIndex);
  showSlides1(slideIndex1);
  showSlides2(slideIndex2);
  showSlides2(slideIndex3);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
  }
  
  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }

  function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
  }
  
  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }

  function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;

    centerScroll();
  }

  function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("demo1");
    let captionText = document.getElementById("caption1");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex1-1].style.display = "block";
    dots[slideIndex1-1].className += " active1";
    captionText.innerHTML = dots[slideIndex1-1].alt;

    centerScroll1();
  }
  
  function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("demo2");
    let captionText = document.getElementById("caption2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active2";
    captionText.innerHTML = dots[slideIndex2-1].alt;

    centerScroll2();
  }

  function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    let dots = document.getElementsByClassName("demo3");
    let captionText = document.getElementById("caption3");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active3", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active3";
    captionText.innerHTML = dots[slideIndex3-1].alt;

    centerScroll3();
  }

  function centerScroll() {
    let container = document.querySelector('.scroll-container');
    let selected = document.querySelector('.active');
    
    container.scrollLeft = selected.offsetLeft + (selected.offsetWidth / 2) - (container.offsetWidth / 2);
  }

  function centerScroll1() {
    let container = document.querySelector('.scroll-container1');
    let selected = document.querySelector('.active1');
    
    container.scrollLeft = selected.offsetLeft + (selected.offsetWidth / 2) - (container.offsetWidth / 2);
  }

  function centerScroll2() {
    let container = document.querySelector('.scroll-container2');
    let selected = document.querySelector('.active2');
    
    container.scrollLeft = selected.offsetLeft + (selected.offsetWidth / 2) - (container.offsetWidth / 2);
  }

  function centerScroll3() {
    let container = document.querySelector('.scroll-container3');
    let selected = document.querySelector('.active3');
    
    container.scrollLeft = selected.offsetLeft + (selected.offsetWidth / 2) - (container.offsetWidth / 2);
  }