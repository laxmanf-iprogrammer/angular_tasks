
import { Component, OnInit, Input,Output, EventEmitter,   } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() receivedParentData:any;

  @Output() newItemEvent = new EventEmitter<string>();
  
  
 
  constructor() { 
    console.log("constructor called");
  }

  ngOnchanges() {
    console.log('ngonchanges called');
  }

  ngOnInit(): void {
    //console.log(this.receivedParentData)
   
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
