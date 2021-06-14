import { Component, OnInit } from '@angular/core';
import { CollectableService } from 'src/app/shared/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collectableItems:any
  constructor(
    private collectableservice: CollectableService
  ) { }

  ngOnInit(): void {
    this.collectableItems = this.collectableservice.getCollection();
  }

}
