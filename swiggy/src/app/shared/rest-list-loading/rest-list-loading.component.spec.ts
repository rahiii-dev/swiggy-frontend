import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestListLoadingComponent } from './rest-list-loading.component';

describe('RestListLoadingComponent', () => {
  let component: RestListLoadingComponent;
  let fixture: ComponentFixture<RestListLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestListLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestListLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
