// const BT1 = require("./BT1");
// import displayArr from "./BT1.ts";
const arr = [10, 2, 3, 8, 6];
console.log("Origin array", arr);
const N = arr.length;
const originLocation = [];
for (let i = 0; i < N; i++) {
    originLocation[i] = i;
}
//bubble sort
for (let i = 0; i < N-1 ; i++) {
    for (let j = i+1; j < N ; j++) {
        if (arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            temp = originLocation[i];
            originLocation[i] = originLocation[j];
            originLocation[j] = temp;
        }
    }
}
console.log("Sorted Array",arr);
console.log("Origin Location of elememts", originLocation);
