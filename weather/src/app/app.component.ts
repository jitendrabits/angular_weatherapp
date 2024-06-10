import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit {
  weather?: WeatherData;
  city: string='Delhi';
  tagName: string='Haze';


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.getWeatherImageData(this.tagName);
  }
  onSubmit(){
    this.getWeatherData(this.city);
     this.city='';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeather(cityName).subscribe(data => {
      this.weather = data;
     this.getWeatherImageData(data.weather[0].main+" weather")

     // console.log("app.componenets",data.weather[0].main)
    });
  }

  private getWeatherImageData(tagNames:string){
    this.weatherService.getWeatherImage(tagNames).subscribe(data => {
      

      this.tagName = data.hits[Math.floor(Math.random() * 10)].webformatURL;
      //console.log("app. componenets",this.tagName)
    });
  }
}