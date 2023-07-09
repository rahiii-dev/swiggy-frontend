import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestLoadingComponent } from './rest-loading.component';

describe('RestLoadingComponent', () => {
  let component: RestLoadingComponent;
  let fixture: ComponentFixture<RestLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
