import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineLoadingComponent } from './cuisine-loading.component';

describe('CuisineLoadingComponent', () => {
  let component: CuisineLoadingComponent;
  let fixture: ComponentFixture<CuisineLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisineLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
