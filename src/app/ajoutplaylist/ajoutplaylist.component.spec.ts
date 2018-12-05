import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutplaylistComponent } from './ajoutplaylist.component';

describe('AjoutplaylistComponent', () => {
  let component: AjoutplaylistComponent;
  let fixture: ComponentFixture<AjoutplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
