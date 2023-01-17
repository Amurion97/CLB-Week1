// const arr = [10, 9, 1, 100, 2, 18, 100, 12, 12,121,4, 1,3, 1, 1,10, 100, 2, 2, 2];
const arr = [];
let count = {};
let N = parseInt(prompt("Nhap so phan tu trong day: "))
for (let i = 0; i < N; i++) {
    arr.push(prompt(`Nhap phan tu thu ${i}`));
    if (isNaN(count[arr[i]])){
        count[arr[i]] = 1;
    } else {
        count[arr[i]] ++;
    }
}
for (const nKey in count) {
    console.log(`Phan tu ${nKey} xuat hien ${count[nKey]} lan`)
}

// alert(`${key} xuat hien ${count} lan trong day ${arr}`)