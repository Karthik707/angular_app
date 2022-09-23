import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  cont: Contact[] = [
    {
      pid: 1,
      pname: 'Contact Details',
      pphone: 9940905080,
      pemail: 'productfactory@gmail.com',
      paddress:'Bangalore - 576231',
      pinsta:'www.insta.com',
      psite:'www.productfactory.com'
    }
  ];

  public getMicroOvenDetails(): any {
    const contObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.cont);
      }, 1000);
    });
    return contObservable;
  }
}
