import { interval, zip, from, Observable, BehaviorSubject } from "rxjs";
import {
  tap,
  map,
  switchMap,
  scan
} from "rxjs/operators";
import { clone } from "ramda";

export type Sortable = {
  value: number;
  isMin: boolean;
  checked: boolean;
  sorted: boolean;
};

export const arr$ = new BehaviorSubject<Sortable[]>([]);
export const updateArray = tap(x =>
  arr$.next(
    Array(x)
      .fill(0)
      .map(() => ({
        checked: false,
        isMin: false,
        sorted: false,
        value: Math.floor(Math.random() * 200)
      }))
  )
);


export function sorterFactory(generator: any) {
  return (options$: Observable<any>) => {
    return options$.pipe(
      scan(
        (acc, [speed, instances]) => {
          if (acc.instances !== instances) {
            return {
              speed: speed,
              arr: arr$.value,
              instances: instances
            };
          } else {
            return {
              ...acc,
              speed: speed
            };
          }
        },
        {
          speed: 0,
          arr: [],
          instances: 0
        }
      ),
      switchMap(config => {
        const sorterGenerator = generator(clone(config.arr));
        return zip(interval(config.speed), from(sorterGenerator));
      }),
      map(([_, x]) => x)
    );
  };
}
