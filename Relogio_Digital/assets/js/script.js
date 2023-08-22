const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateT = new Date();
    let hora = dateT.getHours();
    let min = dateT.getMinutes();
    let sec = dateT.getSeconds();


    if(hora < 10) hora = '0' + hora;

    if(min < 10) min = '0' + min;

    if(sec < 10) sec = '0' + sec;

    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = sec;
})