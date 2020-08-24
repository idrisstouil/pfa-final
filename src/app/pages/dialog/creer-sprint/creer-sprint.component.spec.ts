import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerSprintComponent } from './creer-sprint.component';

describe('CreerSprintComponent', () => {
  let component: CreerSprintComponent;
  let fixture: ComponentFixture<CreerSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
