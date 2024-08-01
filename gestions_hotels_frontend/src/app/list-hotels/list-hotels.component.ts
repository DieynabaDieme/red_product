import { Component, OnInit } from '@angular/core';
import { HotelService, Hotel } from '../list-hotel.service';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private  hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(data => {
      this.hotels = data;
    });
  }
}
