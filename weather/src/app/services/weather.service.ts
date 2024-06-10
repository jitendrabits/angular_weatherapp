import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WeatherData } from '../models/weather.model';
 
@Injectable({
  providedIn: 'root'
})
// export class WeatherService {

// constructor(private http:HttpClient) { }
// getWeatherData(cityName:string):Observable<WeatherData> {

//  return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
//     headers:new HttpHeaders()
//     .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
//     .set(environment.XRapidAPIKeyName,environment.XRapidAPIKeyValue),
//     params: new HttpParams()
//     .set('city',cityName)
//    })

 
// }
 

// }
export class WeatherService {

  private apiKey: string = '44135522-613432f47e13c61579b96aa74';  // Replace with your actual API key
  private apiUrl: string = 'https://pixabay.com/api/';
  //https://pixabay.com/api/?key=44135522-613432f47e13c61579b96aa74&q=dogs&image_type=photo&pretty=true
//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=204d4d35e801229e615cf77b1c77e6d4
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherData> {
    const url = `${environment.baseUrl}?q=${city}&appid=${environment.apiKey}&&units=metric`;
    return this.http.get<WeatherData>(url);
  }

  getWeatherImage(tag: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${tag}&image_type=photo&pretty=true`;
    console.log("imageurl",url)
    return this.http.get<any>(url);
  }
}