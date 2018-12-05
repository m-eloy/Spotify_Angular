import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationplaylistComponent } from './modificationplaylist.component';

describe('ModificationplaylistComponent', () => {
  let component: ModificationplaylistComponent;
  let fixture: ComponentFixture<ModificationplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
