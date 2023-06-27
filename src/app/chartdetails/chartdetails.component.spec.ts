import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdetailsComponent } from './chartdetails.component';

describe('ChartdetailsComponent', () => {
  let component: ChartdetailsComponent;
  let fixture: ComponentFixture<ChartdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
