import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  displayData: boolean = false;
  city: string = '';
  cityWeatherData: any | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeatherOfCity() {
    this.weatherService.getWeatherData(this.city).subscribe((response) => this.cityWeatherData = response);
    
    this.displayData = true;
  }

}
