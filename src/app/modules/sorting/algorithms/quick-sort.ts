import { Sortable, sorterFactory } from "./../sorter";
import { clone } from "ramda";

export function* quickSortGenerator(arr: Sortable[]) {
  for (let i = 0; i < arr.length; i++) {
    const position = arr.length - (i + 1);
    let sorted = true;
    for (let j = 0; j < position; j++) {
      let current = arr[j];
      let next = arr[j + 1];

      if (!next) {
        arr[j].sorted = true;
      } else {
        if (next && current.value > next.value) {
          sorted = false;
          arr[j] = next;
          arr[j + 1] = current;
        }

        arr[j].isMin = false;
        arr[j + 1].isMin = true;
        arr[j].checked = true;
      }

      yield clone(arr);
    }

    if (sorted) {
      arr.forEach(val => {
        val.checked = false;
        val.isMin = false;
        val.sorted = true;
      });
      yield clone(arr);
      return arr;
    } else {
      sorted = true
    }

    arr[position].sorted = true;

    arr.forEach(val => {
      val.checked = false;
      val.isMin = false;
    });

    yield clone(arr);
  }

  return arr;
}

export const quickSort = sorterFactory(quickSortGenerator);
