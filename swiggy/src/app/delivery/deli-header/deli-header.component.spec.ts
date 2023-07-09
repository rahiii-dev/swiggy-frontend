import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliHeaderComponent } from './deli-header.component';

describe('DeliHeaderComponent', () => {
  let component: DeliHeaderComponent;
  let fixture: ComponentFixture<DeliHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
