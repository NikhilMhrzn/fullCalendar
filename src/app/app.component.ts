import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
declare var $:any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  
  
  
  @ViewChild("calendarEl") calendarEl: ElementRef;

  constructor() { }


  ngAfterViewInit() {
    var calendar = new Calendar(this.calendarEl.nativeElement, {
      plugins: [
        interactionPlugin,
        dayGridPlugin
        
      ],
      header: {
        left: '',
        center: 'prev,title,next',
        right: ''
      },
      defaultView: 'dayGridWeek',
      slotDuration: '24:00',
    //   slotDuration: "00:05:00",
    // slotLabelInterval: "00:15:00",
      navLinks: true,
      editable: true,
      eventLimit: true,
      height: 200,


    //   slotDuration: "00:05:00",
    // slotLabelInterval: "00:15:00",
    // contentHeight: "auto",
    // defaultView: "dayGridWeek",
    // eventDurationEditable: false,
    // allDaySlot: false,
    // eventLimit: true,
    // events: [{
    //   title: "Test Entry",
    //   start: "2017-12-18T01:00:00",
    //   end: "2017-12-18T02:00:00"
    // }]
      // dateClick: function(info) {
      //   let initialDayEl = info.dayEl;
      //   console.log($(initialDayEl));
      //   // $(initialDayEl).css({"position":"fixed","width": "425px","border":"none"});
      //   $(initialDayEl).css("position","relative");
      //   let parentElement = initialDayEl.parentElement;
      //   console.log($(parentElement))
        // let nodedata=info.dayEl.childNodes;
        // let nodedatas=info.dayEl.childNodes[1];
        
        // let nodedatas=Array.from(nodedata);
        // console.log(nodedata)
        // console.log(nodedatas)
        
        
        // if(info.dayEl.hasChildNodes()){
        //   let nodedata=info.dayEl.childNodes;
        //   console.log("inside")
        //   for (let i = 0; i < nodedata.length; i++) {
        //     console.log(i)
        //   }
        // }




        // var txt;
        // var i;
        // for (i = 0; i < nodedata.length; i++) {
        //   txt = txt + nodedata[i].nodeName + "<br>";
        // }
        // console.log('test');
        // console.log(txt)
    //     $(initialDayEl).append(`
    //     <div class="add-shift-container container  arrow-left">
    //     <h3 class=" shift-heading ">Add Shift</h3>
    //     <div class="form-container ">
    //         <form>
    //             <div class="row time-input">
    //                 <div class="col-md-6 col-xs-6 col-sm-6">
    //                     <div class="input-group input-group-sm">
    //                         <span class="input-group-addon" style="background: #fff;border: transparent;">
    //                           <i class="fa fa-clock-o"></i>
    //                         </span>
    //                         <input id="date" type="text" class="form-control" name="date" placeholder="eg: 5am - 2pm">
    //                     </div>
    //                 </div>
    //                 <div class="col-md-6 col-xs-6 col-sm-6" id="break-input">
    //                     <div class="input-group" style="margin-left:12px">
    //                         <label class="control-label col-lg-3" for="break" id="break-text">Break</label>
    //                         <div class="col-lg-3" style="padding-left: 8px;">
    //                             <input type="number" class="form-control" id="break">
    //                         </div>
    //                         <label class="control-label col-lg-3" id="mins-text">mins</label>
                            
    //                     </div>
    //                 </div>
    //             </div>


    //             <div class="form-group">
    //                 <div class="input-group input-group-sm">
    //                     <span class="input-group-addon" style="background: #fff;border: transparent; font-size:medium">
    //           <i class="fa fa-briefcase"></i>
    //         </span>
    //                     <select name="role-select" class="form-control" id="role-select" style="width:89%;">
    //                     <option value="default">Select One</option>
    //                       <option value="manager">Manager</option>
    //                       <option value="incharge">Incharge</option>
    //                     </select>
    //                 </div>
    //             </div>
    //             <div class="row comment">
    //                 <div>
    //                     <span><i class="fa fa-comment" aria-hidden="true" style="margin-top: 10px;"></i></span>
    //                 </div>
    //                 <div>
    //                     <textarea class="form-control" cols="36" rows="4" id="notes" placeholder="Notes..." style="margin-left: 10px;"></textarea>
    //                 </div>
    //             </div>
    //             <p style="margin-left: 37px; font-weight: bold;color: #808080;">Employee can only see notes for their own shifts
    //             </p>
    //             <div>
    //                 <input type="checkbox" id="send-notifications" name="send-notifications" value="">
    //                 <label for="send-notifications" style="color: #808080;"> Publish and send notifications?</label><br>
    //             </div>

    //         </form>
    //         <div class="button-group">
    //             <button class="btn btn-primary">Save</button> or
    //             <button class="btn btn-default">Cancel</button>
    //         </div>
    //     </div>
    // </div>
    //     `)
    //   }

      
      // eventRender: function (event, element) {
      //   element.find(".fc-event-title").remove();
      //   element.find(".fc-event-time").remove();
      //   var new_description =
      //     moment(event.start).format("HH:mm") + '-'
      //     + moment(event.end).format("HH:mm") + '<br/>'
      //     + event.customer + '<br/>'
      //     + '<strong>Address: </strong><br/>' + event.address + '<br/>'
      //     + '<strong>Task: </strong><br/>' + event.task + '<br/>'
      //     + '<strong>Place: </strong>' + event.place + '<br/>'
      //     ;
      //   element.append(new_description);
      // },
      // events: [
      //   {
      //     title: 'All Day Event',
      //     start: '2018-01-01',
      //   },
      //   {
      //     title: 'Long Event',
      //     start: '2018-01-07',
      //     end: '2018-01-10'
      //   },
      //   {
      //     id: 999,
      //     title: 'Repeating Event',
      //     start: '2018-01-09'
      //   },
      //   {
      //     id: 999,
      //     title: 'Repeating Event',
      //     start: '2018-01-16T'
      //   },
      //   {
      //     title: 'Conference',
      //     start: '2018-01-11',
      //     end: '2018-01-13'
      //   },
      //   {
      //     title: 'Meeting',
      //     start: '2018-01-12T10:30:00',
      //     end: '2018-01-12T12:30:00'
      //   },
      //   {
      //     title: 'Lunch',
      //     start: '2018-01-12T12:00:00'
      //   },
      //   {
      //     title: 'Meeting',
      //     start: '2018-01-12T14:30:00'
      //   },
      //   {
      //     title: 'Happy Hour',
      //     start: '2018-01-12T17:30:00'
      //   },
      //   {
      //     title: 'Dinner',
      //     start: '2018-01-12T20:00:00'
      //   },
      //   {
      //     title: 'Birthday Party',
      //     start: '2018-01-13T07:00:00'
      //   },
      //   {
      //     title: 'Click for Google',
      //     url: 'http://google.com/',
      //     start: '2018-01-28'
      //   }
      // ]

    });
    calendar.render();
    $('.fc-day-grid .fc-bg tr').children('td').each(function(){
      $(this).click(function(e){
        $(this).css({"position":"relative"})
        $('.fc-day-grid .fc-bg tr').children('td').each(function(){
          if($(this).find('.add-shift-container').length > 0){
            $(this).html('')
          }
        });
        if(!$(this).html()){
          $(this).append(`
          <div class="add-shift-container container  arrow-left">
              <h3 class=" shift-heading ">Add Shift</h3>
              <div class="form-container ">
                  <form>
                      <div class="row time-input">
                          <div class="col-md-6 col-xs-6 col-sm-6">
                              <div class="input-group input-group-sm">
                                  <span class="input-group-addon" style="background: #fff;border: transparent;">
                                    <i class="fa fa-clock-o"></i>
                                  </span>
                                  <input id="date" type="text" class="form-control" name="date" placeholder="eg: 5am - 2pm">
                              </div>
                          </div>
                          <div class="col-md-6 col-xs-6 col-sm-6" id="break-input">
                              <div class="input-group" style="margin-left:12px">
                                  <label class="control-label col-lg-3" for="break" id="break-text">Break</label>
                                  <div class="col-lg-3" style="padding-left: 8px;">
                                      <input type="number" class="form-control" id="break">
                                  </div>
                                  <label class="control-label col-lg-3" id="mins-text">mins</label>
                                  
                              </div>
                          </div>
                      </div>
      
                      <div class="form-group">
                          <div class="input-group input-group-sm">
                              <span class="input-group-addon" style="background: #fff;border: transparent; font-size:medium">
                    <i class="fa fa-briefcase"></i>
                  </span>
                              <select name="role-select" class="form-control" id="role-select" style="width:89%;">
                              <option value="default">Select One</option>
                                <option value="manager">Manager</option>
                                <option value="incharge">Incharge</option>
                              </select>
                          </div>
                      </div>
                      <div class="row comment">
                          <div>
                              <span><i class="fa fa-comment" aria-hidden="true" style="margin-top: 10px;"></i></span>
                          </div>
                          <div>
                              <textarea class="form-control" cols="36" rows="4" id="notes" placeholder="Notes..." style="margin-left: 10px;"></textarea>
                          </div>
                      </div>
                      <p style="margin-left: 37px; font-weight: bold;color: #808080;">Employee can only see notes for their own shifts
                      </p>
                      <div>
                          <input type="checkbox" id="send-notifications" name="send-notifications" value="">
                          <label for="send-notifications" style="color: #808080;"> Publish and send notifications?</label><br>
                      </div>
      
                  </form>
                  <div class="button-group">
                      <button class="btn btn-primary">Save</button> or
                      <button class="btn btn-default">Cancel</button>
                  </div>
              </div>
          </div>
      
          `)
        }

      })
    })
  }
}
