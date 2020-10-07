import './sass/main.scss';

let lastScrollY = 0,
  delayFlag = true,
  delayTime = 4000;

$(function() {
  $('body').addClass('noscroll');

  window.setTimeout(function() {
    $('body').removeClass('noscroll');
  }, delayTime);
});

// preloader
const preloaderTL = gsap.timeline();
preloaderTL.to('#logo', { yPercent: -20, opacity: 0, delay: 4 });
preloaderTL.to('.preloader', {
  transform: 'scaleY(0)',
  transformOrigin: 'top',
  delay: '-=3',
});

const images = [
  'https://i.imgur.com/tKMCb1c.jpg',
  'https://i.imgur.com/Yrp5SQQ.jpg',
  'https://i.imgur.com/Qi59Hp9.jpg',
];
var nextimage = 0;
doSlideshow();

function doSlideshow() {
  if (nextimage >= images.length) {
    nextimage = 0;
  }
  $('.head__body')
    .css('background-image', 'url("' + images[nextimage++] + '")')
    .fadeIn(200, function() {
      setTimeout(doSlideshow, 3000);
    });
}
