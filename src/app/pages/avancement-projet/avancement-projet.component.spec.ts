import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancementProjetComponent } from './avancement-projet.component';

describe('AvancementProjetComponent', () => {
  let component: AvancementProjetComponent;
  let fixture: ComponentFixture<AvancementProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvancementProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvancementProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
