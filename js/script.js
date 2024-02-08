class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _actualDate() {
    return new Date();
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
const tempoParaONatal = new Countdown("25 December 2024 23:59:59 GMT-0300");

const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

setInterval(() => {
  days.innerText = formatDate(tempoParaONatal.total.days);
  hours.innerText = formatDate(tempoParaONatal.total.hours);
  minutes.innerText = formatDate(tempoParaONatal.total.minutes);
  seconds.innerText = formatDate(tempoParaONatal.total.seconds);
}, 1000);
function formatDate(time) {
  return time < 10 ? `0${time}` : `${time}`;
}
