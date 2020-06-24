import { Component, OnInit } from "@angular/core";
import { shitSort } from '@vizModules/sorting/algorithms/shit-sort';
import { quickSort } from '@vizModules/sorting/algorithms/quick-sort';
import { Sortable, arr$, updateArray } from '@vizModules/sorting/sorter';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { startWith, tap, share } from 'rxjs/operators';


@Component({
  selector: "app-sorting",
  templateUrl: "./sorting.component.html",
  styleUrls: ["./sorting.component.sass"]
})
export class SortingComponent implements OnInit{

  speed$ = new BehaviorSubject<number>(500);
  instances$ = new BehaviorSubject<number>(10);

  options$ = combineLatest(
    this.speed$, 
    this.instances$.pipe(updateArray)
  ).pipe(share());

  shitSort$ = shitSort(this.options$);
  quickSort$ = quickSort(this.options$);

  constructor() { }

  ngOnInit(){
    this.options$.subscribe(x => console.log(x))
  }

}

