import { Component } from '@angular/core';

@Component({
  selector: 'app-p-binding',
  templateUrl: './p-binding.component.html',
  styleUrls: ['./p-binding.component.css']
})
export class PBindingComponent {
isd:boolean = false;
path = "./assets/fish.jpeg"
cname:string = "second";
cbool:boolean = true;
sbool:boolean = true;
tbool:boolean = true;

}
