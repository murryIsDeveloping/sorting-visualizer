import { Sortable, sorterFactory } from "./../sorter";
import { clone } from "ramda";


function * shitSortGenerator(arr: Sortable[]){
    for (let i = 0; i < arr.length; i++) {
        let min: number = undefined;
        for(let j = i; j < arr.length; j++) {
            if (min === undefined) {
                arr[j].isMin = true;
                min = j;
            }

            if(arr[j].value < arr[min].value){
                arr[min].isMin = false;
                arr[j].isMin = true;
                min = j;
            }

            arr[j].checked = true;
            yield clone(arr);
        }

        let minValue = clone(arr[min]);
        let currentValue = clone(arr[i]);
        arr[i] = minValue;
        arr[min] = currentValue;
        arr[i].sorted = true;

        for(let value of arr){
            value.isMin = false;
            value.checked = false;
        }

        yield clone(arr);
    }

    return arr
}

export const shitSort = sorterFactory(shitSortGenerator);