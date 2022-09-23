import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  //STRING INTERPOLATION
  title = 'Produt Factory';
  //PROPERTY BINDING
  public logo="https://png.pngtree.com/templates/sm/20180616/sm_5b245b6bd1c7b.jpg";

  onSearch()
  {
    alert("Will contact shortly");
  }


    //Property
    productentered: string=''  //Laptop

    //Event
    search_product(product_name:string):void{ //Laptop
      if(!product_name)
      {
        this.productentered=' ';
      }
      this.productentered=product_name; //Laptop
      console.log(product_name)
    }
  
  ngOnInit(): void {
  }

}
