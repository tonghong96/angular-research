import { Component, OnInit } from '@angular/core';
import { fullDayOfWeek } from "../../../helpers/data";
import * as moment from 'moment';

@Component({
  selector: 'app-customize-calendar',
  templateUrl: './customize-calendar.component.html',
  styleUrls: ['./customize-calendar.component.scss']
})
export class CustomizeCalendarComponent implements OnInit {
  public activeMonth: null | string | Date = new Date();
  public fullDayOfWeek = fullDayOfWeek;
  public formatType = 'YYYY-MM-DD'
  public startDayInMonth = 0;

  constructor() { }

  ngOnInit(): void {
    this.activeMonth = this.formatDatetime(new Date());
    this.startDayInMonth = moment(this.activeMonth).startOf('month').day();
  }

  clickPrevMonth(): void {
    this.activeMonth = moment(this.activeMonth).subtract(1,'months').format(this.formatType)
    this.startDayInMonth = moment(this.activeMonth).startOf('month').day();
  }

  clickNextMonth(): void {
    this.activeMonth = moment(this.activeMonth).add(1,'months').format(this.formatType)
    this.startDayInMonth = moment(this.activeMonth).startOf('month').day();
  }

  calcReviewWidth() {
    if(this.startDayInMonth === 5) return '600px'
    if(this.startDayInMonth === 6) return '720px'
    return '840px'
  }

  calcStartDayArray() {
    if(this.startDayInMonth === 5) return [1, 2]
    if(this.startDayInMonth === 6) return [1]
    return []
  }

  getAllDayFromSecondRow() {
    if(this.startDayInMonth === 5) return this.range(3, this.getDaysInMonth(), 1)
    if(this.startDayInMonth === 6) return this.range(2, this.getDaysInMonth(), 1)

    const dayList = this.range(1, this.getDaysInMonth(), 1)
    for(let i = 0; i < this.startDayInMonth; i++) {
      dayList.unshift(0)
    }
    return dayList;
  }

  getDaysInMonth(): number {
    return moment(this.activeMonth).daysInMonth()
  }

  range(start: number, stop: number, step: number) {
    return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  }

  formatDatetime(datetime: Date | string, type: string = 'YYYY-MM-DD') {
    if (!datetime) { return null }
    return moment(datetime).format(type)
  }

  isToday(day: number) {
    const currentDate = this.formatDatetime(new Date())?.toString().split('-');
    const activeMonth = this.activeMonth?.toString().split('-')
    return currentDate && activeMonth && currentDate[0] === activeMonth[0] && currentDate[1] === activeMonth[1] && currentDate[2] === day.toString()

  }

  getActionIcon(day: number) {
    let action = 'icon_action1'
    let medicine = 'icon_medicine1'
    let actionList = ['icon_sleep', 'icon_cigarette', 'icon_alcohol', 'icon_memo']
    if([3, 12, 17, 18, 25, 30].includes(day)) {
      action = 'icon_action2'
      medicine = 'icon_medicine2'
      actionList = ['icon_cigarette', 'icon_alcohol', 'icon_memo']
    } else if([4, 16, 21, 23, 27, 29].includes(day)) {
      action = 'icon_action3'
      medicine = 'icon_medicine3'
      actionList = ['icon_memo', 'icon_alcohol', 'icon_memo']
    } else if([1, 5, 10, 15, 20].includes(day)) {
      action = 'icon_action4'
      actionList = ['icon_alcohol', 'icon_exercise']
    } else if([6, 8, 13, 24, 26].includes(day)) {
      action = 'icon_action5'
      medicine = 'icon_medicine4'
      actionList = ['icon_alcohol']
    } else if([7, 19, 22, 9].includes(day)) {
      action = 'icon_action6'
      actionList = ['icon_sleep', 'icon_cigarette', 'icon_alcohol', 'icon_memo']
    }

    return {
      action,
      medicine,
      actionList
    }
  }
}
