import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DicomViewerModule } from "./dicom/dicom-viewer.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DicomViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
