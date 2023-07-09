import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestCuisineFormComponent } from './rest-cuisine-form.component';

describe('RestCuisineFormComponent', () => {
  let component: RestCuisineFormComponent;
  let fixture: ComponentFixture<RestCuisineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestCuisineFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestCuisineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
