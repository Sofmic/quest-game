const pole = document.getElementById('blok');
const d = pole.getContext('2d');

const bohater = new Image();
const przeszkoda = new Image();
const obr = new Image;
const zielen = new Image();
obr.src = "img/nic.png";


zielonex = 1000;
zieloney = -60;

wartoscSkoku = 0;

tamax = 1500;
tamaxx = 1000;
tamaxxx = 700;

tamay = 335;

postacx = 50;
postacy = 320;

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





//----------------------------------------------------------------------------------



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


//----------------------------------------------------------------------------------
function rysowanie(){

	d.clearRect(0, 0, 1000, 400);

		if(zielonex < -2000)
			zielonex = 1000;
		else
			zielonex -= 5;
		if(tamay === postacy + 15 && tamax === postacx){
			alert("przegrales!");
			location.reload();
		}
		else if(tamay === postacy + 15 && tamaxx === postacx){
			alert("przegrales!");
			location.reload();
		}
		else if(tamay === postacy + 15 && tamaxxx === postacx){
			alert("przegrales!");
			location.reload();
		}
				

		if( tamax > -10 )
			tamax -= 5;
		else
			tamax = 900;
		

		if( tamaxx > -10 )
			tamaxx -= 5;
		else
			tamaxx = 900;

		if( tamaxxx > -10 )
			tamaxxx -= 5;
		else
			tamaxxx = 900;
		
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

}
postac(postacx,postacy);
tama(tamax[0]);
tama(tamax[1]);
tama(tamax[2]);
zielone(zielonex,zieloney);

const animacja = new FpsCtrl(80, rysowanie);


document.querySelector('#start').addEventListener('click', function() {
    animacja.start();
    if (animacja.isPlaying) {
         document.addEventListener('keydown',function(przycisk){
         	if(wartoscSkoku === 0)
         		if(przycisk.key == "ArrowUp")
         			wartoscSkoku = 13;
         })
    }
});

