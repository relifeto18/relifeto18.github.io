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

    adjustPosition(false); 
    adjustPosition1(false); 
    adjustPosition2(false); 
    adjustPosition3(false);  
    adjustPosition4(false);  

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

  // const flipCardInner = document.getElementById('flip-card-inner');
  // const flipCardFront = flipCardInner.querySelector('.flip-card-front');
  // const flipCardBack = flipCardInner.querySelector('.flip-card-back');

  // flipCardInner.addEventListener('mouseover', function() {
  //   this.style.width = flipCardBack.scrollWidth + 'px';
  //   this.style.height = flipCardBack.scrollHeight + 'px';
  // });

  // flipCardInner.addEventListener('mouseout', function() {
  //   this.style.width = flipCardFront.offsetWidth + 'px';
  //   this.style.height = flipCardFront.offsetHeight + 'px';
  // });

  // document.addEventListener('DOMContentLoaded', function() {
  //   const flipCardInner = document.getElementById('flip-card-inner');
  //   const flipCardFront = flipCardInner.querySelector('.flip-card-front');
  //   const flipCardBack = flipCardInner.querySelector('.flip-card-back');
  //   const followingSection = document.querySelector('.following-section');
  
  //   // Function to adjust the margin of the following section
  //   function adjustFollowingSection() {
  //     const flipCardHeight = flipCardInner.offsetHeight;
  //     followingSection.style.marginTop = flipCardHeight + 'px';
  //   }
  
  //   // Adjust margin on flip card hover and mouseout
  //   flipCardInner.addEventListener('mouseover', adjustFollowingSection);
  //   flipCardInner.addEventListener('mouseout', adjustFollowingSection);
  
  //   // Initial adjustment on page load
  //   adjustFollowingSection();
  // });

  // document.addEventListener('DOMContentLoaded', function() {
  //   const flipCard = document.querySelector('.flip-card'); // Selector for the flip card
  //   const followingSection = document.querySelector('.following-section'); // Selector for the section following the flip card

  //   function adjustFollowingSection() {
  //       // We'll use the 'transitionend' event to adjust the margin after the flip animation completes
  //       followingSection.style.marginTop = flipCard.offsetHeight + 'px';
  //   }

  //   // Add event listener to the flip card
  //   flipCard.addEventListener('transitionend', adjustFollowingSection);

  //   // Initial adjustment on page load
  //   adjustFollowingSection();
  // });

  // window.onload = function() {
  //   flipCardInner.style.height = flipCardFront.scrollHeight + 'px';
  // };

  // document.addEventListener('DOMContentLoaded', function() {
  //   var flipCard = document.querySelector('.flip-card-inner');
  //   var frontHeight = document.querySelector('.flip-card-front').offsetHeight;
  //   var backHeight = document.querySelector('.flip-card-back').offsetHeight;
    
  //   // Set the height of the flip-card-inner to the height of the taller side
  //   flipCard.style.height = Math.max(frontHeight, backHeight) + 'px';
  // });

  var isFlipped = false;
  var isFlipped1 = false;
  var isFlipped2 = false;
  var isFlipped3 = false;
  var isFlipped4 = false;

  function adjustPosition(flipped) {
    isFlipped = flipped;
    var flipCard = document.querySelector('.flip-card');
    var front = document.querySelector('.flip-card-front');
    var back = document.querySelector('.flip-card-back');

    flipCard.style.height = (isFlipped ? back.offsetHeight : front.offsetHeight) + 'px';
  }

  function adjustPosition1(flipped) {
    isFlipped1 = flipped;
    var flipCard1 = document.querySelector('.flip-card-1');
    var front1 = document.querySelector('.flip-card-front-1');
    var back1 = document.querySelector('.flip-card-back-1');

    flipCard1.style.height = (isFlipped1 ? back1.offsetHeight : front1.offsetHeight) + 'px';
  }

  function adjustPosition2(flipped) {
    isFlipped2 = flipped;
    var flipCard2 = document.querySelector('.flip-card-2');
    var front2 = document.querySelector('.flip-card-front-2');
    var back2 = document.querySelector('.flip-card-back-2');

    flipCard2.style.height = (isFlipped2 ? back2.offsetHeight : front2.offsetHeight) + 'px';
  }

  function adjustPosition3(flipped) {
    isFlipped3 = flipped;
    var flipCard3 = document.querySelector('.flip-card-3');
    var front3 = document.querySelector('.flip-card-front-3');
    var back3 = document.querySelector('.flip-card-back-3');

    flipCard3.style.height = (isFlipped3 ? back3.offsetHeight : front3.offsetHeight) + 'px';
  }

  function adjustPosition4(flipped) {
    isFlipped4 = flipped;
    var flipCard4 = document.querySelector('.flip-card-4');
    var front4 = document.querySelector('.flip-card-front-4');
    var back4 = document.querySelector('.flip-card-back-4');

    flipCard4.style.height = (isFlipped4 ? back4.offsetHeight : front4.offsetHeight) + 'px';
  }

  // $(document).ready(function() {
  //   adjustPosition(false); 
  // });

  // document.addEventListener('DOMContentLoaded', function() {
  //   adjustPosition(false);
  // });

  // window.addEventListener('load', function() {
  //   adjustPosition(false);
  // });