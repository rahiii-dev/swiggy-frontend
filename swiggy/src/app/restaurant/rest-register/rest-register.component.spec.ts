import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestRegisterComponent } from './rest-register.component';

describe('RestRegisterComponent', () => {
  let component: RestRegisterComponent;
  let fixture: ComponentFixture<RestRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
