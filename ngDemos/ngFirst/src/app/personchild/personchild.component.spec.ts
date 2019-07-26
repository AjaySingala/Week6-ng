import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonchildComponent } from './personchild.component';

describe('PersonchildComponent', () => {
  let component: PersonchildComponent;
  let fixture: ComponentFixture<PersonchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
