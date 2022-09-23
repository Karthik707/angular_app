import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  Onbuy(){
    alert("product added successfully");
  }
  ngOnInit(): void {
  }


  

    productdetails = [
      {
        "pid": "100",
        "pname": "Shoes",
        "pdescription": "Formal",
        "status": "In Stock",
        "price": "3000",
        "img":"assets/f1.jpg"
      },
      {
        "pid": "101",
        "pname": "Tshirt",
        "pdescription": "Slim fit",
        "status": "Out of Stock",
        "price":"800",
        "img":"assets/f2.jpg"
      },
      {
        "pid": "103",
        "pname": "Watch",
        "pdescription": "Classic",
        "status": "In Stock",
        "price": "5999",
        "img":"assets/f3.jpg"
      },
      {
        "pid": "104",
        "pname": "Headphone",
        "pdescription": "Wireless",
        "status": "Out of Stock",
        "price": "2000",
        "img":"assets/f4.jpg"
      },
      {
        "pid": "105",
        "pname": "Shampoo",
        "pdescription": "Herbal",
        "status": "In Stock",
        "price": "499",
        "img":"assets/f5.jpg"
      },
      {
        "pid": "106",
        "pname": "Smart TV",
        "pdescription": "60 Inch display",
        "status": "In Stock",
        "price": "50000",
        "img":"assets/f6.jpg"
      },
      {
        "pid": "107",
        "pname": "Laptop",
        "pdescription": "HP",
        "status": "In Stock",
        "price": "7777",
        "img":"assets/f7.jpg"
      },
      {
        "pid": "108",
        "pname": "Chocolates",
        "pdescription": "Special pack",
        "status": "Out of Stock",
        "price": "799",
        "img":"assets/f8.jpg"
      },
      {
        "pid": "108",
        "pname": "Bag",
        "pdescription": "Travel bag",
        "status": "In Stock",
        "price": "1200",
        "img":"assets/f9.jpg"
      }
    ]
}
