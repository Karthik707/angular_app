import { Component, OnInit } from '@angular/core';
import * as prodimg from "../data/productimage.json";
@Component({
  selector: 'app-productimage',
  templateUrl: './productimage.component.html',
  styleUrls: ['./productimage.component.css']
})
export class ProductimageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prod:any=(prodimg as any).default;
}
