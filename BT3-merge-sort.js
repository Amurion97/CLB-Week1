const arr = [10, 9, 1, 100, 2, 18, 1931];

//merge sort
function mergeSort(arr) {
    // console.log("arr", arr);
    if (arr.length <= 1) {
        return arr;
    } else {
        let mid = Math.round(arr.length/2);
        // console.log("mid", mid)
        let left = arr.slice(0, mid);
        // console.log("left",left);
        left = mergeSort(left);
        // console.log("left",left);
        let right = arr.slice(mid, arr.length);
        // console.log("right",right);
        right = mergeSort(right);
        // console.log("right",right);
        let count = arr.length;
        let mergedArr = [];
        while (count > 0) {
            if ((right.length < 1) || (left[0] < right[0])) {
                mergedArr.push(left.shift());
            } else {
                mergedArr.push(right.shift());
            }
            count--;
            // console.log("mergedArr", mergedArr);
        }
        return mergedArr;
    }
}

let sorted = mergeSort(arr);
console.log(sorted);
