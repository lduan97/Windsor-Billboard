import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lat = 21.1594627;
  long = 73.935242;
  zoom = 4;
  
  markers = [
        {
            lat: 21.1594627,
            lng: 72.6822083,
            label: 'Surat'
        },
        {
            lat: 23.0204978,
            lng: 72.4396548,
            label: 'Ahmedabad'
        },
        {
            lat: 22.2736308,
            lng: 70.7512555,
            label: 'Rajkot'
        }
    ];
 }
