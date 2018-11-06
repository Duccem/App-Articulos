import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArticuloShowComponent } from './dialog-articulo-show.component';

describe('DialogArticuloShowComponent', () => {
  let component: DialogArticuloShowComponent;
  let fixture: ComponentFixture<DialogArticuloShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogArticuloShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArticuloShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
