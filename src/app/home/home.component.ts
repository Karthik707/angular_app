import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

    //TWO-WAY BINDING
    name = "John"
    //theme for Carousel contents
    mycolor = 'black';

  productdetails=[{
    "pid":'001',
    "image":"",
    "pname":"Laptop",
    "pdescription":"Some details about laptops",
    "Status":"In Stock"
    }
    ]

     //Array - *ngFor
  //key:value
  Products: any[] = [
    {
      "productname": "Size: Small"
    },
    {
      "productname": "Type: Cotton"
    },
    {
      "productname": "Color: White"
    },
    {
      "productname": "Rating: 4"
    },
    {
      "productname": "Price: $50"
    }
    
   
  ]

  Products1: any[] = [
    {
      "productname": "Model: Samsung Galaxy"
    },
    {
      "productname": "Ram: 4GB"
    },
    {
      "productname": "Camera: 48MP"
    },
    {
      "productname": "Rating: 5"
    },
    {
      "productname": "Price: $200"
    }
    
  ]

  Products2: any[] = [
    {
      "productname": "Brand: Mamaearth"
    },
    {
      "productname": "Type: Hairfall Control"
    },
    {
      "productname": "Vitamin: C"
    },
    {
      "productname": "Rating: 3"
    },
    {
      "productname": "Price: $20"
    }
    

  ]

  Products3: any[] = [
    {
      "productname": "Brand: Adidas"
    },
    {
      "productname": "Size: 10"
    },
    {
      "productname": "Type: Sports"
    },
    {
      "productname": "Rating: 4"
    },
    {
      "productname": "Price: $100"
    }
    

  ]
  //Event to hide Products
  isVisible: boolean = true;
  hide_products() {
    this.isVisible = !this.isVisible;
  }
  ngOnInit(): void {
  }
  toggleContent(){
    var content='';
    if(this.isVisible){
      content='fa-solid fa-square-minus';
    }
    else{
      content='fa-solid fa-square-plus';
    }
    return content;
  }
}
