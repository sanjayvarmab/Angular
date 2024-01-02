import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pathv:string = '/assets/fish.jpeg';
  title = 'first-app';
  sdate:string = new Date().toLocaleDateString();
  stime:string = new Date().toLocaleTimeString();
  sample1:string = 'typescript sample1';
  c:number=5;
  d:number=6;
   sum(a:any,b:any){
    return a*b;
  }
  a:any = setInterval(()=>{
    this.stime = new Date().toLocaleTimeString();

  },1000);
  sampleDate(){
    return this.c*this.d;

  }
}
