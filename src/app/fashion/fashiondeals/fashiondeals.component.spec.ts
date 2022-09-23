import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashiondealsComponent } from './fashiondeals.component';

describe('FashiondealsComponent', () => {
  let component: FashiondealsComponent;
  let fixture: ComponentFixture<FashiondealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashiondealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashiondealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
