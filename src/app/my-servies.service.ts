import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiesService {

  constructor(private http:HttpClient) { }
  baseUrl = "";
  appUrl = "http://api.crushprice.com/json/all-json-data.php?action=homepageKeywords";
  test(){
    return "sanjay"
  }
  fetchData():Observable<any>{
    return this.http.get(this.appUrl);
  }
}
