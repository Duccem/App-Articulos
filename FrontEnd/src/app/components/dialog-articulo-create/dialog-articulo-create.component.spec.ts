import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArticuloCreateComponent } from './dialog-articulo-create.component';

describe('DialogArticuloCreateComponent', () => {
  let component: DialogArticuloCreateComponent;
  let fixture: ComponentFixture<DialogArticuloCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogArticuloCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArticuloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
