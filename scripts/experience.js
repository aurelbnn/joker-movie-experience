let body = document.querySelector("body"),


let opacityChange = document.querySelector('.jokerApparition');
$(window).on('scroll', function() {
   let st = $(this).scrollTop();
   opacityChange.css({ 'opacity' : (0 - st/35) });
});
