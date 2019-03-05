const pole = document.getElementById('blok');
const d = pole.getContext('2d');

const niebo = new Image();
const bohater = new Image();
const droga = new Image();
const przeszkoda = new Image();

function postac(y){
	bohater.addEventListener("load",function(){ 
		d.drawImage(bohater,0,y) 
	}); 

	bohater.src = "img/postac.png";
}

function sciezka(){
	droga.addEventListener('load',function(){	
		d.drawImage(droga,0,340); postac(320)
	}); 

	droga.src = "img/droga.png";
}


function tlo(){
	niebo.addEventListener("load",function(){	
		d.drawImage(niebo,0,0); 
		sciezka();	
	}); 

	niebo.src = "img/niebo.png";
}

tlo()

let idrequest;

function petla(){

	//kod z przeszkodami

}

function start(){
	
	idrequest = requestAnimationFrame(petla);

}

function stop(){
	
	cancelAnimationFrame(idrequest);

}



	
	

