import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererBacklogComponent } from './gerer-backlog.component';

describe('GererBacklogComponent', () => {
  let component: GererBacklogComponent;
  let fixture: ComponentFixture<GererBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererBacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
