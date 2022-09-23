import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  cont: Contact[]=[];
  //constructor injection of the MicroovenService
  constructor(private contservice:ContactService) { }

  ngOnInit(): void {
    const contObservable= this.contservice.getMicroOvenDetails();
    contObservable.subscribe((microData: Contact[])=>{
      this.cont=microData;
    });
  }

}
