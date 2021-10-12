/*
Loading in all the elements
*/
const circle = document.querySelector('.ball');
const drop = document.querySelector('#drop');
const ramp = document.querySelector('#ramp');
const lblxloc = document.querySelector('#xloc');
const lblyloc = document.querySelector('#yloc');
const lblspeed = document.querySelector('#speed');
const rampel = document.querySelector('.ramp');


//The vertical velocity
let v = 0;
//The horizontal velocity
let h = 0;

//Acceleration due to gravity
const gravAcc = 9.8 ;
//The horizontal acceleration on the ramp
const horSlopeAcc = 2.212 ;
//The vertical acceleration on the ramp
const vertSlopeAcc = 0.632 ;




//Stating the location of all the elements at the start
window.addEventListener('load', ()=>{
	circle.style.position = 'absolute';
	circle.style.left = '50px';
	circle.style.top = '100px';
	rampel.style.position = 'absolute';
	rampel.style.left = '50px';
	rampel.style.top =  '500px';
});


drop.addEventListener('click', ()=>{
	disbaleButtons();
    circle.style.visibility = 'visible';
    myInterval =   setInterval(updateLocation,50);
});

function slope(){
	if(parseInt(circle.style.top)>=600 && parseInt(circle.style.left)>=50){
		reset();
		enableButtons();
		clearInterval(myVar);
	}else{
		circle.style.top = parseInt(circle.style.top) + v + 'px';
		circle.style.left = parseInt(circle.style.left) + h + 'px';
		v += vertSlopeAcc; //The vertical acceleration of the slope is being added
		h += horSlopeAcc; //The horizontal acceleration of the slope is being added
		updateLbl(circle.style.left, circle.style.top, Math.sqrt(v*v + h*h).toFixed(2));	
	}
}
function updateLocation(){
	if(parseInt(circle.style.top)>=500){
		reset();
		enableButtons();
		v = 0;
		clearInterval(myInterval);
	}else{
		vertical();
		updateLbl(circle.style.left,circle.style.top,v.toFixed(2));

	}
}

ramp.addEventListener('click', ()=>{
	rampel.style.visibility = 'visible';
	circle.style.visibility = 'visible';
	disbaleButtons();
	interval = setInterval(rampUpdate,50);
		
});


function rampUpdate(){
	if(parseInt(circle.style.top)>=304){
		circle.style.top = '417px';
		v = 0;
		myVar = setInterval(slope,50);
		clearInterval(interval);
	}else{
		vertical();
		updateLbl(circle.style.left, circle.style.top, v.toFixed(2));
	}
}
function vertical(){
	circle.style.top = parseInt(circle.style.top) + v + 'px';
	v += gravAcc;	
}


function reset(){
	circle.style.visibility = 'hidden';
	circle.style.left = '50px';
	circle.style.top = '100px';
	rampel.style.visibility = 'hidden';
	v = 0;
	h = 0;
	lblxloc.innerHTML = "x-loc: ";  
    lblyloc.innerHTML = "y-loc: ";
    lblspeed.innerHTML = "speed: ";

}



/*
	The purpose of this function is to disable all the buttons when
	the program is running
*/
function disbaleButtons(){
	ramp.disabled = true;
	drop.disabled = true;
	ramp.style.background = "grey";
	drop.style.background = "grey";
}

/*
	The purpose of this function is to enable all the buttons when
	the program is running
*/
function enableButtons(){
	ramp.disabled = false;
	drop.disabled = false;
	ramp.style.background = "purple";
	drop.style.background = "purple";
}


function updateLbl(x,y,speed){
    lblxloc.innerHTML = "x-loc: " + x  ;  
    lblyloc.innerHTML = "y-loc: " + y;
    lblspeed.innerHTML = "speed: " + speed;

}
