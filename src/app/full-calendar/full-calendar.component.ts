import { Component, OnInit, Input,ViewChild  } from '@angular/core';
import * as $ from 'jquery';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import 'fullcalendar';
import * as moment from 'moment';
   
$(function() {

   $('#calendar').fullCalendar({
     defaultView: 'month',
 
     header: {
       center: 'addEventButton'
     },
 
     customButtons: {
       addEventButton: {
         text: 'add event...',
         click: function() {
           var dateStr = prompt('Enter a date in YYYY-MM-DD format');
           var titre=prompt('Enter Title...')
           var date = moment(dateStr);
 
           if (date.isValid()) {
             $('#calendar').fullCalendar('renderEvent', {
               title: titre,
               start: date,
               allDay: true
             });
            
           } else {
             alert('Invalid date.');
           }
         }
       }
     }
   });
 
 });
document.addEventListener('DOMContentLoaded', function() {
   
   let draggableEl = document.getElementById('mydraggable');
   let calendarEl = document.getElementById('mycalendar');
 
   let calendar = new Calendar(calendarEl, {
     plugins: [ interactionPlugin ],
     droppable: true
   });
   calendar.render();
 
   new Draggable(draggableEl);
 });
  

@Component({
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
      }
      @Input() eventData: any;
   
   defaultConfigurations: any;
   constructor() {
    this.eventData = [
      
    
      {
        title:' Smart Cyber Security',
        start:"2020-02-22T09:30:00.000Z",
        end: "2020-02-22T15:00:10.370Z",
       
      },
      {
         title:' Réunion Hmadi',
        start:"2020-02-17T13:00:00.000Z",
        end: "2020-02-17T13:30:10.370Z",
      },
      {
         title:' Réunion DeepFake Detection',
        start:"2020-02-18T13:00:00.000Z",
        end: "2020-02-18T13:30:10.370Z",
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
