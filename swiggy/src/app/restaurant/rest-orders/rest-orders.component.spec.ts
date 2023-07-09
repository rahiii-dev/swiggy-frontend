import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestOrdersComponent } from './rest-orders.component';

describe('RestOrdersComponent', () => {
  let component: RestOrdersComponent;
  let fixture: ComponentFixture<RestOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
