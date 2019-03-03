const pole = document.getElementById('blok');
const d = pole.getContext('2d');

d.beginPath();
d.moveTo(0,200);
d.lineTo(10,190);
d.lineTo(20,200);
d.lineTo(0,200);
d.stroke();
