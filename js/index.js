const day = document.getElementById("timeDay");
const hour = document.getElementById("timeHours");
const minute = document.getElementById("timeMinute");
const second = document.getElementById("timeSecond");



function countDown() {


  const dateEvent = new Date("25 dec 2022").getTime()
  
  var now = new Date().getTime();

  var distance = dateEvent - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days || hours || minutes || seconds) {
    
  }
  day.innerText = formatarTempo(days) + "D"
  hour.innerText = formatarTempo(hours) + "H"
  minute.innerText = formatarTempo(minutes) + "M"
  second.innerText = formatarTempo(seconds) + "S"
}

function formatarTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo
}

setInterval('countDown()', 1000);
