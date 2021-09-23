import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DicomViewerModule } from "./dicom/dicom-viewer.module";
import { CpComponent } from './cp/cp.component';
import { Cp2Component } from './cp2/cp2.component';
import { Cp3Component } from './cp3/cp3.component';
import { Cp4Component } from './cp4/cp4.component';
import { Cp5Component } from './cp5/cp5.component';
import { Cp6Component } from './cp6/cp6.component';
import { Cp7Component } from './cp7/cp7.component';
import { Cp8Component } from './cp8/cp8.component'

@NgModule({
  declarations: [
    AppComponent,
    CpComponent,
    Cp2Component,
    Cp3Component,
    Cp4Component,
    Cp5Component,
    Cp6Component,
    Cp7Component,
    Cp8Component
  ],
  imports: [
    BrowserModule,
    DicomViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
