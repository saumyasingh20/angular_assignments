import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
  apiKey:string='a6c2cbefd3c8c50b34110f9264ec637d';
  url:string = 'http://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private httpClient:HttpClient) { }

  getWeatherData(city:string){
    return this.httpClient.get(this.url+ city + '&appid=' + this.apiKey);
  }
}
