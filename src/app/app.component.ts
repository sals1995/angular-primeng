import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  dateSelected: Date;
  // rangeDates: Date[];

  // minDate: Date;

  // maxDate: Date;

  // invalidDates: Array<Date>

  ngOnInit() {
      // let today = new Date();
      // let month = today.getMonth();
      // let year = today.getFullYear();
      // let prevMonth = (month === 0) ? 11 : month -1;
      // let prevYear = (prevMonth === 11) ? year - 1 : year;
      // let nextMonth = (month === 11) ? 0 : month + 1;
      // let nextYear = (nextMonth === 0) ? year + 1 : year;
      // this.minDate = new Date();
      // this.minDate.setMonth(prevMonth);
      // this.minDate.setFullYear(prevYear);
      // this.maxDate = new Date();
      // this.maxDate.setMonth(nextMonth);
      // this.maxDate.setFullYear(nextYear);

      // let invalidDate = new Date();
      // invalidDate.setDate(today.getDate() - 1);
      // this.invalidDates = [today,invalidDate];
    }
    selectingDate(){
    console.log(this.dateSelected)

  }
}
