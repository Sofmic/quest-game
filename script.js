const pole = document.getElementById('blok');
const d = pole.getContext('2d');

var tablica = [0,0,0]
var koniecgry = 0;
var mozna = 0;
var punkty = 0;
const bohater = new Image();
const przeszkoda = new Image();
const obr = new Image;
const zielen = new Image();
obr.src = "img/nic.png";

zielonex = 1000;
zieloney = -60;

wartoscSkoku = 0;

tamax = 1400;
tamaxx = 1000;
tamaxxx = 1200;

tamay = 335;

postacx = 50;
postacy = 320;

function wypisz_wynik(){

	document.getElementById("wynikj").innerHTML = "1: "+tablica[0] + " pkt";
	document.getElementById("wynikd").innerHTML = "2: "+tablica[1] + " pkt";
	document.getElementById("wynikt").innerHTML = "3: "+tablica[2] + " pkt";

}
wypisz_wynik();

function dodaj_wynik(pkt){

	if(tablica[0] < pkt){
		tablica[2] = tablica[1]; 
		tablica[1] = tablica[0];
		tablica[0] = pkt;

	}
	else if(tablica[1] < pkt){
		tablica[2] = tablica[1]; 
		tablica[1] = pkt;
	}
	else if(tablica[2] < pkt)
		tablica[2] = pkt;

	wypisz_wynik();
}	

function zielone(x,y){
	zielen.addEventListener("load",function(){ 
		d.drawImage(zielen,x,y) 
	}); 

	zielen.src = "img/zielen.png";
}


function postac(x,y){
	bohater.addEventListener("load",function(){ 
		d.drawImage(bohater,x,y) 
	}); 

	bohater.src = "img/postac.png";
}


function tama(x){
	przeszkoda.addEventListener("load",function(){ 
		d.drawImage(przeszkoda,x,335); postac(postacx,postacy)
	}); 

	przeszkoda.src = "img/przeszkoda.png";
}


function FpsCtrl(fps, cb) {
    const delay = 1000 / fps;
    let time = null;
    let frame = -1;
    let req;
    let isPlaying = false;

    function loop(timestamp) {
        if (time === null) {
            time = timestamp;
        }
        let seg = Math.floor((timestamp - time) / delay);
        if (seg > frame) {
            frame = seg;

            cb({
                time: timestamp,
                frame: frame
            })
        }
        req = requestAnimationFrame(loop)
    }

    this.start = function() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            req = requestAnimationFrame(loop);
        }
    };

    this.pause = function() {
        if (this.isPlaying) {
            cancelAnimationFrame(req);
            this.isPlaying = false;
            time = null;
            frame = -1;
        }
    };
}


function koniec(){
	koniecgry = 1;
	animacja.pause;
	mozna = 0;
	alert("Twoj wynik to: " + punkty + " pkt.")
	dodaj_wynik(punkty);
	game_restart()
}

function rysowanie(){
	if(mozna && koniecgry == 0){
	d.clearRect(0, 0, 1000, 400);

		if(zielonex < -2000)
			zielonex = 1000;
		else
			zielonex -= 5;
		if(tamay === postacy + 15 && tamax === postacx){
			koniec();
		}
		else if(tamay === postacy + 15 && tamaxx === postacx){
			koniec();
		}
		else if(tamay === postacy + 15 && tamaxxx === postacx){
			koniec();
		}
		else{

			punkty++;
		}				

		if( tamax > -10 )
			tamax -= 5;
		else
			tamax = 1400 ;
		

		if( tamaxx > -10 )
			tamaxx -= 5;
		else
			tamaxx = 1000;

		if( tamaxxx > -10 )
			tamaxxx -= 5;
		else
			tamaxxx = 1200;
		
	if( wartoscSkoku > 1 ){
		postacy -= 6;
		wartoscSkoku--;
	}
	else if( postacy != 320){
		postacy += 6;
	}
	else{
		wartoscSkoku = 0;
	}

	d.drawImage(zielen,zielonex,zieloney)
	d.drawImage(przeszkoda,tamax,tamay);
	d.drawImage(przeszkoda,tamaxx,tamay);
	d.drawImage(przeszkoda,tamaxxx,tamay);
	d.drawImage(bohater,postacx,postacy) 

}}


function game_restart(){
	koniecgry = 0;
	mozna = 0;
	punkty = 0;
	d.clearRect(0, 0, 1000, 400);
	zielonex = 1000;
	wartoscSkoku = 0;

	tamax = 1300;
	tamaxx = 1000;
	tamaxxx = 1200;

	postacx = 50;
	postac(postacx,postacy);
	tama(tamax[0]);
	tama(tamax[1]);
	tama(tamax[2]);
	
}

postac(postacx,postacy);
tama(tamax[0]);
tama(tamax[1]);
tama(tamax[2]);
zielone(zielonex,zieloney);

const animacja = new FpsCtrl(80, rysowanie); 


document.addEventListener("keydown",function(k){ // Reakcje na wcisniete klawisze

	if(k.key === "F1"){
		game_restart();
	}
	else if(k.key === "F2"){
		mozna = !mozna;
	}
	else if(k.key === "Enter"){
		if(koniecgry == 1 && mozna == 0 )
			punkty = 0;
		mozna = 1;
    	animacja.start();
    	if (animacja.isPlaying) {
    	     document.addEventListener('keydown',function(przycisk){
   		      	if(wartoscSkoku === 0)
    	     		if(przycisk.key == "ArrowUp")
    	     			wartoscSkoku = 13;
    	     })
    	}
	}
})

