import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPanelComponent } from './principal-panel.component';

describe('PrincipalPanelComponent', () => {
  let component: PrincipalPanelComponent;
  let fixture: ComponentFixture<PrincipalPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
