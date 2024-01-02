import { Component, OnInit } from '@angular/core';
import { MyServiesService } from '../my-servies.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  srv: string = '';
  jdata: any = '';
  constructor(private myService: MyServiesService) { }
  ngOnInit(): void {
    this.srv = this.myService.test();
    //  this.jdata  = this.myService.fetchData();
    this.myService.fetchData().subscribe(rersponse => {
      this.jdata = rersponse;
    }

    )
  }

  c:number = 0;
  message:string="";
  nm:string = "sanju"; 
  
  n =[1,2,3,4,5];

  

test(){
  return this.c++;
}
test1(){
  this.nm="Hello Sanjay";
}

studentData= [{
  id: 1,
  name: "John Doe",
  age: 18,
  grade: "A",
  subjects: ["Math", "Science", "English"],
  address:[ {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    country: "USA"
  }]

}];

students= [
    {
      "name": "John Doe",
      "subject1": 85,
      "subject2": 90,
      "subject3": 78
    },
    {
      "name": "Jane Smith",
      "subject1": 50,
      "subject2": 60,
      "subject3": 30
    },
    {
      "name": "Michael Johnson",
      "subject1": 78,
      "subject2": 83,
      "subject3": 87
    },
    {
      "name": "Emily Williams",
      "subject1": 50,
      "subject2": 50,
      "subject3": 50
    },
    {
      "name": "Daniel Brown",
      "subject1": 50,
      "subject2": 40,
      "subject3": 30
    }
  ]

  calculateAverage (  a:any, b:any, c:any ): number {
    const totalMarks = a+b+c;
    return totalMarks / 3;
  }

  getGrade(percentage: any){
    if (percentage >=80){
      return 'A';
    }
    if (percentage >= 50 && percentage <80){
      return 'B';
    }
    else{
      return 'C'
    }
  }

 
}
