import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  router: any;

  constructor() { }
  onClick(){
    this.router.navigate(['fashiondeals'])
  }
  ngOnInit(): void {
  }

}
