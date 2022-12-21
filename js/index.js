const day = document.getElementById("timeDay");
const hour = document.getElementById("timeHours");
const minute = document.getElementById("timeMinute");
const second = document.getElementById("timeSecond");

// function countDown() {
//   const dateEvent = new Date("25 dec 2022").getTime();

//   var now = new Date().getTime();

//   var distance = dateEvent - now;

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   day.innerText = formatarTempo(days) + "D";
//   hour.innerText = formatarTempo(hours) + "H";
//   minute.innerText = formatarTempo(minutes) + "M";
//   second.innerText = formatarTempo(seconds) + "S";
// }

// function formatarTempo(tempo) {
//   return tempo < 10 ? `0${tempo}` : tempo;
// }

// setInterval("countDown()", 1000);

class Countdown {
  constructor(dateEvent) {
    this.dateEvent = new Date(dateEvent).getTime();
  }

  distance() {
    const now = new Date().getTime();
    const distance = this.dateEvent - now;
    return distance;
  }

  countDias() {
    var days = Math.floor(this.distance() / (1000 * 60 * 60 * 24));
    return days;
  }
  countHoras() {
    var hours = Math.floor(
      (this.distance() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    return hours;
  }
  countMinutos() {
    var minutes = Math.floor(
      (this.distance() % (1000 * 60 * 60)) / (1000 * 60)
    );
    return minutes;
  }
  countSegundos() {
    var seconds = Math.floor((this.distance() % (1000 * 60)) / 1000);
    return seconds;
  }

  formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
  }

  atualizaDados(day, hour, minute, second) {
    day.innerText = this.formatarTempo(this.countDias()) + "D";
    hour.innerText = this.formatarTempo(this.countHoras()) + "H";
    minute.innerText = this.formatarTempo(this.countMinutos()) + "M";
    second.innerText = this.formatarTempo(this.countSegundos()) + "S";
  }
}

var novoCount = new Countdown("24 dec 2022");
setInterval('novoCount.atualizaDados(day, hour, minute, second)', 1000)

// console.log(novoCount.countDias());
