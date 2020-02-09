import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import * as moment from 'moment';@Component({
   selector: 'app-full-calendar',
   templateUrl: './full-calendar.component.html',
   styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {
  @Input()
      set configurations(config: any) {
         if(config)
          {
            this.defaultConfigurations = config;  
         }
      }@Input() eventData: any;
   
   defaultConfigurations: any;
   constructor() {
    this.eventData = [
      {
         title: 'deadlinefreeways',
         start: moment()
      },
      {
         title: 'AG securinets ',
         start: moment().add(1, 'days'),
         end: moment().add(1, 'days')
      },
      {
        title:' GG ISI',
        start:moment().add(3, 'days'),
        end: moment().add(3, 'days'),
      }
    ];
     this.defaultConfigurations = {editable: true,
         eventLimit: true,
         titleFormat: 'MMM D YYYY',
         header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
         },
         buttonText: {
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day'
         },
         views: {
            agenda: {
               eventLimit: 2
            }
         },
         allDaySlot: false,
         slotDuration: moment.duration('00:15:00'),
         slotLabelInterval: moment.duration('01:00:00'),
         firstDay: 1,
         selectable: true,
         selectHelper: true,
         events: this.eventData,
         dayClick: (date, jsEvent, activeView) => {
          this.dayClick(date, jsEvent, activeView);
       },
       
       eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
          this.eventDragStart(
              timeSheetEntry, jsEvent, ui,activeView
          );
       },eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
          this.eventDragStop(
             timeSheetEntry, jsEvent, ui, activeView
          );
       },
      };
      

   }
   dayClick(date, jsEvent, activeView) {
    console.log('day click');
 }eventDragStart(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag start');
 }eventDragStop(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag end');
 }
   
   ngOnInit() {
    $('#full-calendar').fullCalendar(
      this.defaultConfigurations
   );
    }
  }