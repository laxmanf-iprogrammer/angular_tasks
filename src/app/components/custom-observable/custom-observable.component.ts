import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from "rxjs";
@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  constructor() { }
  // firstObsSubscription:Subscription;

 ngOnInit() {
  const customObservable = Observable.create((observer:any) => {
    let count = 0;
    setInterval(
      () => {
        observer.next(count);
        count++;
      }, 1000);
  });

  customObservable.subscribe((data: Number) => {
    console.log("Next Number: " + data)
  });

  // ngOnDestroy() {
  //   this.customObservable.unsubscribe();
  // }
}

}
