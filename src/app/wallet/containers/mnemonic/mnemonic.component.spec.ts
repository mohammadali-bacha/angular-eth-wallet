import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnemonicComponent } from './mnemonic.component';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';


describe('MnemonicComponent', () => {
  let component: MnemonicComponent;
  let fixture: ComponentFixture<MnemonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnemonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnemonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
