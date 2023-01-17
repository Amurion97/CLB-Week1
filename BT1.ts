const arr: number[] = [];
const N: number = parseInt(prompt("Nhap so phan tu (N): "));
// let locations = [];
for (let i: number = 0; i < N; i++) {
    let element: number = parseInt(prompt(`Nhap phan tu thu ${i + 1}: `));
    if (search(element, arr)) {
        alert(`Da co trong mang.`);
    }
    arr.push(element);
}

function search(value: number, arr: number[]) {
    for (let i: number = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
}

function displayArr(arr) {
    let result:string = "<hr/>";
    for (let i:number = 0; i < arr.length; i++) {
        result += "<p>Element " + (i + 1).toString() + " = " + arr[i] + "</p>";
    }
    // document.getElementById("notification").innerHTML = "";
    document.write(result);
    return 1;
}

displayArr(arr);
// module.exports = {displayArr};