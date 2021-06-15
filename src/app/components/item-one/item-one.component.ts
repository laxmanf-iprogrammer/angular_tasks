import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-one',
  templateUrl: './item-one.component.html',
  styleUrls: ['./item-one.component.css']
})
export class ItemOneComponent implements OnInit {



  title = 'item module load ';
  constructor() { }

  ngOnInit(): void {
  }

}
