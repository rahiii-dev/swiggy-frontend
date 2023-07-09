import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelHomeComponent } from './del-home.component';

describe('DelHomeComponent', () => {
  let component: DelHomeComponent;
  let fixture: ComponentFixture<DelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
