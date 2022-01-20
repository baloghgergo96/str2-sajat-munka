import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList: Event[];

  constructor(EventService: EventService) {
    this.eventList = EventService.getAll();
  }

  ngOnInit(): void {
  }

}
