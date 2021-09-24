import { Component, OnInit, Input } from '@angular/core';

import {  ViewChild } from '@angular/core';
import { DICOMViewerComponent } from '../dicom/dicom-viewer.component';


declare const cornerstone;
declare const cornerstoneWADOImageLoader;

@Component({
  selector: 'app-cp6',
  templateUrl: './cp6.component.html',
  styleUrls: ['./cp6.component.css']
})
export class Cp6Component implements OnInit {

  
  @Input()('dicomImageParent') imageFileDicom = undefined
  @Input() parentData: any;
  @ViewChild(DICOMViewerComponent, { static: true }) viewPort: DICOMViewerComponent;

  @Input('activeFrame') activeFrame :any

  @ViewChild(DICOMViewerComponent) toolActivator:DICOMViewerComponent
frame:number = 6

  handleToolViewer(){
    if(this.activeFrame === 6) return true
  }

  ngOnInit() {
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone; // inicializa WADO Image loader

    // configura codecs e web workers
    cornerstoneWADOImageLoader.webWorkerManager.initialize({
        webWorkerPath: './assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
        taskConfiguration: {
            'decodeTask': {
                codecsPath: '../codecs/cornerstoneWADOImageLoaderCodecs.js'
            }
        }
    });
  }

  /**
   * Load selected DICOM images
   *
   * @param files list of selected dicom files
   */
  loadDICOMImages(files: FileList) {
    console.log(files);
    if (files && files.length > 0) {
      let imageList = [];
      const fileList:Array<File> = Array.from(files);
      fileList.sort((a,b) => {
        if ( a.name > b.name ) return 1;
        if ( b.name > a.name ) return -1;
        return 0;
      })
      //cornerstoneWADOImageLoader.wadouri.fileManager.purge();
      cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.purge();

      // loop thru the File list and build a list of wadouri imageIds (dicomfile:)
      for (let i = 0; i < fileList.length; i++) {
        const dicomFile: File = fileList[i];
        const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(dicomFile);
        imageList.push(imageId);
      }

      this.viewPort.resetAllTools();

      // now load all Images, using their wadouri
      this.viewPort.loadStudyImages(imageList);

    } else alert('Error.');
  }
}
