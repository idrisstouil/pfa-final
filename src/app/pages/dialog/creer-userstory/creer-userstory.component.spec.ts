import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUserstoryComponent } from './creer-userstory.component';

describe('CreerUserstoryComponent', () => {
  let component: CreerUserstoryComponent;
  let fixture: ComponentFixture<CreerUserstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerUserstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerUserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
