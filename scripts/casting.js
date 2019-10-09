const container = document.querySelector('.container'),
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

//const firstCardZoom = document.querySelector('.zoomCard').className='visible';


// CARD ANIMATION AND ZOOM TO SEE COMPLETED INFORMATIONS
// ANIMATION WITH MOUSEOVER TO ROTATE A CARD
// ANIMATION WITH THE CLICK TO ZOOM AND SHOW THE INFORMATIONS

firstCard.addEventListener('mouseover', function() {
  firstCardAnimation.play();
});

secondCard.addEventListener('mouseover', function() {
  secondCardAnimation.play();
});


thirdCard.addEventListener('mouseover', function() {
  thirdCardAnimation.play();
});


fourthCard.addEventListener('mouseover', function() {
  fourthCardAnimation.play();
});


fifthCard.addEventListener('mouseover', function() {
  fifthCardAnimation.play();
});


sixthCard.addEventListener('mouseover', function() {
  sixthCardAnimation.play();
});
