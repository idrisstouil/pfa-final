import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererTachesComponent } from './gerer-taches.component';

describe('GererTachesComponent', () => {
  let component: GererTachesComponent;
  let fixture: ComponentFixture<GererTachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererTachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
