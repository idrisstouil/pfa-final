import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererProjetComponent } from './gerer-projet.component';

describe('GererProjetComponent', () => {
  let component: GererProjetComponent;
  let fixture: ComponentFixture<GererProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
