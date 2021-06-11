import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() item = '';

  //serverElement: '';
  //ServerContent: '';
  serverElementContent: any = []
  serverContentForm: FormGroup;



  constructor(
    private fb: FormBuilder,
  ) { 
    this.serverContentForm  = this.fb.group({
      serverName: ["",Validators.required],
      serverData: ["", Validators.required]

    })
  }

  ngOnInit(): void {
  }
  addServer() {
   this.serverElementContent.push({
     type: this.serverContentForm,
     //name: this.ServerContent
   })
    
  }
  addOnBluePrint() {
  
  }
}
