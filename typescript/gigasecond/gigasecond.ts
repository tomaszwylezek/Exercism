export default class Gigasecond {
  gigaSecondDate: Date;
  constructor(date: Date) {
    this.gigaSecondDate = this.addGigaSecond(date);
  }

  addGigaSecond(date: Date) {
    return new Date(date.getTime() + 10 ** 12);
  }

  date() {
    return this.gigaSecondDate;
  }
}
