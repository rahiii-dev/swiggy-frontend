import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestHeaderComponent } from './rest-header.component';

describe('RestHeaderComponent', () => {
  let component: RestHeaderComponent;
  let fixture: ComponentFixture<RestHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
