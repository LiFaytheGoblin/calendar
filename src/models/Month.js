class Month {
  #year;
  #month;
  #id;
  #startsWith;
  daysOfMonth;

  constructor(year, month) {
    this.#year = year;
    this.#month = month;
    this.#id = this.#year + "-" + this.#month;
    
    this.startsWith = new Date(this.#year, this.#month, 0).getDay(); // Sunday - Saturday : 0 - 6 (Src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)

    // Credit: https://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php
    this.daysOfMonth = new Date(this.#year, this.#month, 0).getDate();
  }

  next() {
    let nextMonthsYear = this.#year;
    let nextMonth = this.#month + 1;
    if(nextMonth > 12) {
      nextMonth = 1;
      nextMonthsYear += 1;
    }
    return new Month(nextMonthsYear, nextMonth);
  }

  previous() {
    let prevMonthsYear = this.#year;
    let prevMonth = this.#month - 1;
    if(prevMonth < 1) {
      prevMonth = 12;
      prevMonthsYear -= 1;
    }
    return new Month(prevMonthsYear, prevMonth);
  }

  get year() {
    return this.#year;
  }

  get month() {
    return this.#month;
  }

  get id() {
    return this.#id;
  }
}

module.exports = Month;
