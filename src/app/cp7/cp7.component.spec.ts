import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp7Component } from './cp7.component';

describe('Cp7Component', () => {
  let component: Cp7Component;
  let fixture: ComponentFixture<Cp7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
