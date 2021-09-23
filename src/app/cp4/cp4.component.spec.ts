import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp4Component } from './cp4.component';

describe('Cp4Component', () => {
  let component: Cp4Component;
  let fixture: ComponentFixture<Cp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
