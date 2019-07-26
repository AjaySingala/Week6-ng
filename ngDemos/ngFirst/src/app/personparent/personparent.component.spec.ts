import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonparentComponent } from './personparent.component';

describe('PersonparentComponent', () => {
  let component: PersonparentComponent;
  let fixture: ComponentFixture<PersonparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
