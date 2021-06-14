import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectableService {

  constructor() { }
  private collectables = [
    { 'description': 'abc',  type: 'book' }, 
    { 'description': 'aaa', type: 'price'}, 
    { 'description': 'abc',  type: 'photp' }, 
    { 'description': 'aaa', type: 'garbegae'}, 
    { 'description': 'abc',  type: 'piece of paper' }, 
    { 'description': 'aaa', type: 'photp'}, 
    { 'description': 'abc',  type: 'book' }, 
    { 'description': 'aaa', type: 'price'}, 


  ]

  private collection:any = []


  getCollectables() {
    return this.collectables
  }

  getCollection() {
    return this.collection;
  }

  addToCollection(item: any) {
    if(this.collection.indexOf(item) ==-1) {
      return;
    }
    this.collection.push(item)
  }


  removeFromCollection(item:any) {
    this.collection.splice(this.collection.indexOf(item),1);

  }
}
