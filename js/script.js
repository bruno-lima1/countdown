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
  get _totalSeconds() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._totalSeconds / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._totalSeconds / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._totalSeconds / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._totalSeconds / 1000);
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
const newYearTime = new Countdown("01 January 2025 00:00:00 GMT-0300");

const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

setInterval(() => {
  days.innerText = formatDate(newYearTime.total.days);
  hours.innerText = formatDate(newYearTime.total.hours);
  minutes.innerText = formatDate(newYearTime.total.minutes);
  seconds.innerText = formatDate(newYearTime.total.seconds);
}, 1000);
function formatDate(time) {
  return time < 10 ? `0${time}` : `${time}`;
}
