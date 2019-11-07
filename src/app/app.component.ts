import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google';
  
  lat: number = 51.678418;
  lng: number = 7.809007;
  locationChosen = false; 
  onlocate(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
     this.locationChosen = true;
  }
}
