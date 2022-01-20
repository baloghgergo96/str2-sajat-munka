import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      {
      name: "Event1",
      date: "2022.01.01",
      time: "6:00",
      location: {
        address: "Fő út 2",
        city: "Debrecen",
        country: "Hungary",
        }
      },
      {
        name: "Event2",
        date: "2020.01.01",
        time: "7:00",
        location: {
          address: "Fő út 10",
          city: "Miskolc",
          country: "Hungary",
          }
        },
        {
          name: "Event3",
          date: "2010.01.01",
          time: "2:00",
          location: {
            address: "Fő út 55",
            city: "Győr",
            country: "Hungary",
            }
          },
    ]
  }
}
