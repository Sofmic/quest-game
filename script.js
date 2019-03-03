const pole = document.getElementById('blok');
const d = pole.getContext('2d');

const niebo = new Image();
const bohater = new Image();
const droga = new Image();

function tlo(){

	niebo.addEventListener("load",function(){	d.drawImage(niebo,0,0)	}); niebo.src = "img/niebo.png";
	droga.addEventListener('load',function(){	d.drawImage(droga,0,340);	}); droga.src = "img/droga.png"

}

function postacDwa(){

	bohater.src = "img/postac2.png";
	tlo();
	d.drawImage(bohater,0,320);
}

function postacJeden(){

	bohater.src = "img/postac.png";
	tlo();
	d.drawImage(bohater,0,320);
}

tlo();

bohater.addEventListener("load",function(){	
	d.drawImage(bohater,0,320)	
})

bohater.src = "img/postac.png";


document.addEventListener("keydown",function(k){  
	if( k.key === "ArrowUp" ){	 
		if(bohater.src === "img/postac2.png")
		postacJeden();	
	else
		postacDwa();
	}
})




	
	

