import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp5Component } from './cp5.component';

describe('Cp5Component', () => {
  let component: Cp5Component;
  let fixture: ComponentFixture<Cp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
