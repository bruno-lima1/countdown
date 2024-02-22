const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
if (days && hours && minutes && seconds) {
  class Countdown {
    constructor(newYearDate) {
      this.newYearDate = newYearDate;
    }
    get _actualDate() {
      return new Date();
    }
    get _newYearDate() {
      return new Date(this.newYearDate);
    }
    get _totalSeconds() {
      return (this._newYearDate - this._actualDate) / 1000;
    }
    get _days() {
      return Math.floor(this._totalSeconds / 24 / 60 / 60);
    }
    get _hours() {
      return Math.floor(this._totalSeconds / 60 / 60);
    }
    get _minutes() {
      return Math.floor(this._totalSeconds / 60);
    }
    get _seconds() {
      return Math.floor(this._totalSeconds);
    }
    get _total() {
      const days = this._days;
      const hours = this._hours % 24;
      const minutes = this._minutes % 60;
      const seconds = this._seconds % 60;
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  }
  const countdown = new Countdown("01 January 2025 00:00:00 GMT-0300");

  function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
  }

  setInterval(() => {
    days.innerText = formatTime(countdown._total.days);
    hours.innerText = formatTime(countdown._total.hours);
    minutes.innerText = formatTime(countdown._total.minutes);
    seconds.innerText = formatTime(countdown._total.seconds);
  }, 1000);
}
