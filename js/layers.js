let scrollerLeft = document.querySelector('.scroller-left');
let scrollerRight = document.querySelector('.scroller-right');

let scrollerLeftActive = false;
let scrollerRightActive = false;

// mpuse events
scrollerLeft.addEventListener('mousedown',function(){
  scrollerLeftActive = true;
});
scrollerRight.addEventListener('mousedown',function(){
  scrollerRightActive = true;
});

// touch events
scrollerLeft.addEventListener('touchstart',function(){
  scrollerLeftActive = true;
});
scrollerRight.addEventListener('touchstart',function(){
  scrollerRightActive = true;
});

// mouse events
document.body.addEventListener('mouseup',function(){
	scrollerOff();
});

document.body.addEventListener('mouseleave',function(){
	scrollerOff();
});

// touch events
document.body.addEventListener('touchend',function(){
	scrollerOff();
});

document.body.addEventListener('touchcancel',function(){
	scrollerOff();
});


function scrollerOff(){
	scrollerLeftActive = false;
  scrollerRightActive = false;
}


// mouse events
document.body.addEventListener('mousemove',function(event){
  if (scrollerLeftActive || scrollerRightActive){
	  let mousePosition = event.pageX;
	  mousePosition -= document.querySelector('.slider-wrap').getBoundingClientRect().left;
	  scrollLayers(mousePosition);
  };
});

// touch events
document.body.addEventListener('touchmove',function(event){
  if (scrollerLeftActive || scrollerRightActive){
	  let mousePosition = event.pageX;
	  mousePosition -= document.querySelector('.slider-wrap').getBoundingClientRect().left;
	  scrollLayers(mousePosition);
  };
});



function scrollLayers (newPosition){

	let move = Math.max(Math.min(newPosition,document.querySelector('.slider-wrap').offsetWidth),0);

  if (scrollerLeftActive){   
    document.querySelector('.slider-img-left').style.width = move+"px";
    scrollerLeft.style.left = move-25+"px";
    
    if (scrollerLeft.getBoundingClientRect().left>scrollerRight.getBoundingClientRect().left){
      document.querySelector('.slider-img-middle').style.width = move+"px";
      scrollerRight.style.left = move-25+"px";
    }
  }
  
  if (scrollerRightActive){
    document.querySelector('.slider-img-middle').style.width = move+"px";
    scrollerRight.style.left = move-25+"px";
    
    // console.log('transf = ', move, 'right = ', scrollerLeft.getBoundingClientRect().left, 'left = ', scrollerRight.getBoundingClientRect().left);
    if (scrollerLeft.getBoundingClientRect().left>scrollerRight.getBoundingClientRect().left-5){
      document.querySelector('.slider-img-left').style.width = move+"px";
      scrollerLeft.style.left = move-25+"px";
    }
  }
};







