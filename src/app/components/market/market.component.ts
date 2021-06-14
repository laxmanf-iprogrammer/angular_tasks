import { Component, OnInit } from '@angular/core';
import { CollectableService } from 'src/app/shared/collectable.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  collectables:any

  constructor(
    private collectableservice: CollectableService
  ) { }

  ngOnInit(): void {
    this.collectables = this.collectableservice.getCollectables();
    console.log("collectables",this.collectables);
    
  }
  onAddToCollection(item:any) {
    this.collectableservice.addToCollection(item);
    alert('jhfgjhdfjk')
  }
}
