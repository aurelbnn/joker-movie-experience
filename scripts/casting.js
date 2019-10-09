const container = document.querySelector('.container'),
      playButton = document.querySelector('.playButton'),
      firstCard = document.querySelector('#firstCard')
      secondCard = document.querySelector('#secondCard')
      thirdCard = document.querySelector('#thirdCard')
      fourthCard = document.querySelector('#fourthCard')
      fifthCard = document.querySelector('#fifthCard')
      sixthCard = document.querySelector('#sixthCard')

TweenMax.set(container, {perspective:1000});

const firstCardAnimation = TweenMax.to(firstCard, 2, {
  rotationY: -360,
  x:850,
  paused: true,
});

const secondCardAnimation = TweenMax.to(secondCard, 2, {
  rotationY: -180,
  x:550,
  paused: true,
});

const thirdCardAnimation = TweenMax.to(thirdCard, 2, {
  rotationY: -180,
  x:850,
  paused: true,
});

const fourthCardAnimation = TweenMax.to(fourthCard, 2, {
  rotationY: -180,
  x:1150,
  paused: true,
});

const fifthCardAnimation = TweenMax.to(fifthCard, 2, {
  rotationY: -180,
  x:1150,
  paused: true,
});

const sixthCardAnimation = TweenMax.to(sixthCard, 2, {
  rotationY: -180,
  x:1150,
  paused: true,
});

playButton.addEventListener('click', function() {
  firstCardAnimation.play();
});
