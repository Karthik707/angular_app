import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:UserService,private cartSvc:CartService) { }
  auth:boolean=false;
   //Add to cart
   cartCount: number=0;
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

   //Auth Service
   ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );

       //Cart count
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
  }

 

  
}
  

