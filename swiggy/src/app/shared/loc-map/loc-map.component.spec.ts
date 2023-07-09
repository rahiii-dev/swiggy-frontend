import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocMapComponent } from './loc-map.component';

describe('LocMapComponent', () => {
  let component: LocMapComponent;
  let fixture: ComponentFixture<LocMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
