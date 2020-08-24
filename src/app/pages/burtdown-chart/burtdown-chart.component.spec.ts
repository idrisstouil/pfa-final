import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurtdownChartComponent } from './burtdown-chart.component';

describe('BurtdownChartComponent', () => {
  let component: BurtdownChartComponent;
  let fixture: ComponentFixture<BurtdownChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurtdownChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurtdownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
