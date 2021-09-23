import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CpComponent } from './cp/cp.component';
import { Cp2Component } from './cp2/cp2.component'
import { Cp3Component } from './cp3/cp3.component'
import { Cp4Component } from './cp4/cp4.component'
import { Cp5Component } from './cp5/cp5.component'
import { Cp6Component } from './cp6/cp6.component'
import { Cp7Component } from './cp7/cp7.component'
import { Cp8Component } from './cp8/cp8.component'
import { ThumbnailDirective } from './dicom/thumbnail.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild(CpComponent) child: CpComponent;
  @ViewChild(Cp2Component) child2: Cp2Component;
  @ViewChild(Cp3Component) child3: Cp3Component;
  @ViewChild(Cp4Component) child4: Cp4Component;
  @ViewChild(Cp5Component) child5: Cp5Component;
  @ViewChild(Cp6Component) child6: Cp6Component;
  @ViewChild(Cp7Component) child7: Cp7Component;
  @ViewChild(Cp8Component) child8: Cp8Component;

  // @ViewChildren(ThumbnailDirective) thumbnails: Array<ThumbnailDirective>;

  activeFrame:any;
  activeFrameNumber:any;
  dicomImageParent:any;
  
  
  arr = []
  parentData: any;
  style:any
  activeTool:string = 'Pan'
  seriesList:any
  historyVisibility:boolean

  constructor(){
    this.dicomImageParent = undefined;
    this.activeFrame = 1
    this.activeFrameNumber = 1
    this.style = "border: 1px solid red;"
    this.arr[this.activeFrameNumber] = this.style
    this.historyVisibility = true
  }
  ngOnInit() {

  }

  getFrameProbe(componentAccessor:any){
    return this[componentAccessor].toolActivator.probeStates
  }

  handleHistoryVisibility(){
    this.historyVisibility = !this.historyVisibility
  }

  frame1WidthHeight(){
    if(this.activeFrame=== 1){
      return "w-100 h-100"
    }
    if(this.activeFrame === 2){
      return "w-50 h-100"
    }
    if(this.activeFrame === 4){
      return "w-25 h-100"
    }
    if(this.activeFrame === 8){
      return "w-25 h-50"
    }
  }
  
  selectTool(toolType:string){
    this.activeTool = toolType
  }
  
  activateTool(toolType:string,componentAccessor:string){
    if(toolType === 'Pan'){
      this[componentAccessor].toolActivator.enablePan()
    }
    if(toolType === 'Probe'){
      this[componentAccessor].toolActivator.enableProbe()
    }
    if(toolType === 'Window'){
      this[componentAccessor].toolActivator.enableWindowing()
    }
    if(toolType === 'Invert'){
      this[componentAccessor].toolActivator.invertImage()
    }
    if(toolType === 'Zoom'){
      this[componentAccessor].toolActivator.enableZoom()
    }
    if(toolType === 'Length'){
      this[componentAccessor].toolActivator.enableLength()
    }
    if(toolType === 'Angle'){
      this[componentAccessor].toolActivator.enableAngle()
    }
    if(toolType === 'Elliptical'){
      this[componentAccessor].toolActivator.enableElliptical()
    }
    if(toolType === 'Rectangle'){
      this[componentAccessor].toolActivator.enableRectangle()
    }
    if(toolType === 'Highlighter'){
      this[componentAccessor].toolActivator.enableHighlight()
    }
    if(toolType === 'Freehand'){
      this[componentAccessor].toolActivator.enableFreeHand()
    }
    if(toolType === 'SaveAs'){
      this[componentAccessor].toolActivator.saveAs()
    }
    if(toolType === 'NextImage'){
      this[componentAccessor].toolActivator.nextImage()
    }
    if(toolType === 'PreviousImage'){
      this[componentAccessor].toolActivator.previousImage()
    }
    if(toolType === 'Play'){
      this[componentAccessor].toolActivator.playClip()
    }
    if(toolType === 'Stop'){
      this[componentAccessor].toolActivator.stopClip()
    }
    if(toolType === 'ResetTools'){
      this[componentAccessor].toolActivator.resetAllTools()
    }
    if(toolType === 'Console'){
      this[componentAccessor].toolActivator.getConsole()
    }
  }

  frame2WidthHeight(){
    if(this.activeFrame === 2) return "w-50 h-100"
    if(this.activeFrame === 4) return "w-25 h-100"
    if(this.activeFrame === 8) return "w-25 h-50"
  }
  frame34WidthHeight(){
    if(this.activeFrame === 4) return "w-25 h-100"
    if(this.activeFrame === 8) return "w-25 h-50"
  }
  frame8WidthHeight(){
    if(this.activeFrame === 8) return "w-25 h-50"
  }

  handleImageChange(files:FileList){
    this.child.loadDICOMImages(files);
    this.child2.loadDICOMImages(files);
    this.child3.loadDICOMImages(files);
    this.child4.loadDICOMImages(files);
    this.child5.loadDICOMImages(files);
    this.child6.loadDICOMImages(files);
    this.child7.loadDICOMImages(files);
    this.child8.loadDICOMImages(files);
    console.log("Files",files)
    // this.parentData= files;
    this.seriesList = this.child.toolActivator.seriesList
  }
  findIndexFrame(){
    return this.arr.findIndex((item)=> item !== undefined )
  }
  frameChange(numOfFrame:Number){
    console.log(numOfFrame);
    this.activeFrame = numOfFrame;
  }
  
  convertFrameToComponentName(frameNo:number){
    if(frameNo === 1) return 'child'
    if(frameNo === 2) return 'child2'
    if(frameNo === 3) return 'child3'
    if(frameNo === 4) return 'child4'
    if(frameNo === 5) return 'child5'
    if(frameNo === 6) return 'child6'
    if(frameNo === 7) return 'child7'
    if(frameNo === 8) return 'child8'
  }

  selectFrame(frameNo:Number){
    console.log(frameNo)
    this.arr = []
    this.activeFrameNumber = frameNo;
    this.arr[this.activeFrameNumber] = this.style
    this.activateTool(this.activeTool,this.convertFrameToComponentName(this.findIndexFrame()))
  }
}