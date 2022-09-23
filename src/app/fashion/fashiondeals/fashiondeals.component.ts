import { Component, OnInit } from '@angular/core';

import * as alldeals from "../fashion.json";
@Component({
  selector: 'app-fashiondeals',
  templateUrl: './fashiondeals.component.html',
  styleUrls: ['./fashiondeals.component.css']
})
export class FashiondealsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
