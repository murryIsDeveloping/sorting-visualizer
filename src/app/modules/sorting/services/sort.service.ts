import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  public sort(list: number[]) {
    return list.sort((a,b) => a - b)
  }

  public randomise(list: number[]) {
    return list.sort(() => Math.random() - 0.5)
  }
}
