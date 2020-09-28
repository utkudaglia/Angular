import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cities } from './store/models/cities.models';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private WEATHER_API = "api.openweathermap.org/data/2.5/weather";
  private API_KEY = "28f56935bda4026725c7c557df2125c7";

  constructor(private http: HttpClient) { }

  getWeatherResult(cityName: string){
    return this.http.get(`${this.WEATHER_API}?q=${cityName}&units=metric&appid=${this.API_KEY}`)
  }
}
