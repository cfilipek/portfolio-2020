import './sass/main.scss';

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
