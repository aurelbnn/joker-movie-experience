const container = document.querySelector('.container'),
      playButton1 = document.querySelector('#playButton1'),
      playButton2 = document.querySelector('#playButton2'),
      playButton3 = document.querySelector('#playButton3'),
      playButton4 = document.querySelector('#playButton4'),
      playButton5 = document.querySelector('#playButton5'),
      playButton6 = document.querySelector('#playButton6'),

      firstCard = document.querySelector('#firstCard')
      secondCard = document.querySelector('#secondCard')
      thirdCard = document.querySelector('#thirdCard')
      fourthCard = document.querySelector('#fourthCard')
      fifthCard = document.querySelector('#fifthCard')
      sixthCard = document.querySelector('#sixthCard')

TweenMax.set(container, {perspective:1000});

const firstCardAnimation = TweenMax.to(firstCard, 2, {
  rotationY: 360,
  paused: true,
});

const secondCardAnimation = TweenMax.to(secondCard, 2, {
  rotationY: 360,
  paused: true,
});

const thirdCardAnimation = TweenMax.to(thirdCard, 2, {
  rotationY: 360,
  paused: true,
});

const fourthCardAnimation = TweenMax.to(fourthCard, 2, {
  rotationY: 360,
  paused: true,
});

const fifthCardAnimation = TweenMax.to(fifthCard, 2, {
  rotationY: 360,
  paused: true,
});

const sixthCardAnimation = TweenMax.to(sixthCard, 2, {
  rotationY: 360,
  paused: true,
});

//const firstCardZoom = document.querySelector('.info').className='visible';


// CARD ANIMATION AND ZOOM TO SEE COMPLETED INFORMATIONS
// ANIMATION WITH MOUSEOVER TO ROTATE A CARD
// ANIMATION WITH THE CLICK TO ZOOM AND SHOW THE INFORMATIONS

firstCard.addEventListener('mouseover', function() {
  firstCardAnimation.play();
});

firstCard.addEventListener('click', function() {
  firstCardZoom.play();
});

secondCard.addEventListener('mouseover', function() {
  secondCardAnimation.play();
});

secondCard.addEventListener('click', function() {
  secondCardZoom.play();
});

thirdCard.addEventListener('mouseover', function() {
  thirdCardAnimation.play();
});

thirdCard.addEventListener('click', function() {
  thirdCardZoom.play();
});

fourthCard.addEventListener('mouseover', function() {
  fourthCardAnimation.play();
});

fourthCard.addEventListener('click', function() {
  fourthCardZoom.play();
});

fifthCard.addEventListener('mouseover', function() {
  fifthCardAnimation.play();
});

fifthCard.addEventListener('click', function() {
  fifthCardZoom.play();
});

sixthCard.addEventListener('mouseover', function() {
  sixthCardAnimation.play();
});

sixthCard.addEventListener('click', function() {
  sixthCardZoom.play();
});
