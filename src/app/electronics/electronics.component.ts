import { Component, OnInit } from '@angular/core';
import * as electronics from "../data/electronics.json";
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   //Fetch the data from electronics.json using the alias refrigerator in line nnumber 4
   elec:any=(electronics as any).default;

   //Toggle effect to show and hide the pdescription and price
   //Property for toggle effect
   productDetail=false;
   //Event to perform the toggle effect
   showproductDetailsToggle()
   {
     this.productDetail=!this.productDetail;
   }
   //function to toggle between the span content from + to - and vice versa
   //and bind the function to [ngClass]
   toggleContent(){
     var content='';
     if(this.productDetail){
       content='fa-solid fa-arrow-up';
     }
     else{
       content='fa-solid fa-arrow-down';
     }
     return content;
   }
}