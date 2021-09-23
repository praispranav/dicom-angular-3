import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp8Component } from './cp8.component';

describe('Cp8Component', () => {
  let component: Cp8Component;
  let fixture: ComponentFixture<Cp8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
