import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp6Component } from './cp6.component';

describe('Cp6Component', () => {
  let component: Cp6Component;
  let fixture: ComponentFixture<Cp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
