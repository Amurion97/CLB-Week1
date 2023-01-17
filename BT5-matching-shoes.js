let input = [];
document.getElementById("ok").addEventListener("click", function () {
    input.splice(0, input.length)
    let text = document.getElementById("input").value;
    let temp = ""
    for (let i = 0; i < text.length; i++) {
        // console.log(text[i]," ",text.charCodeAt(i));
        if (text.charCodeAt(i) !== 10){
            temp = temp + text[i];
        } else {
            input.push(temp);
            temp = "";
        }
    }
    input.push(temp);
    console.log(`Raw ${input}`);
    switch (cleanData()){
        case 1:
            console.log("No input");
            break;
        case 2:
            console.log("Number of shoes is incorrect")
            break;
        case 0:
            console.log(input);
    }
    for (let i = 1; i < input.length; i++) {
        if (!checkShoeValidity(input[i])){
            console.log(`The ${i}th shoe is incorrect`);
            break;
        }
    }
    let totalMatchingPair = 0;
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (checkMatching(input[i], input[j])){
                totalMatchingPair ++;
            }
        }
    }
    document.getElementById("result").innerHTML = `There are ${totalMatchingPair} matching pairs`;
});
function cleanData(){
    if (input.length < 1) {
        return 1;
    }
    let N = parseInt(input[0]);
    if (isNaN(N)){
        return 2;
    }
    // console.log(N, input.length - N - 1);
    input.splice(N+1, input.length - N - 1);
    return 0;
}
function checkMatching(shoe1, shoe2){
    if (shoe1[0] === shoe2[0]){
        return false;
    }
    if (parseInt(shoe1.slice(1)) !== parseInt(shoe2.slice(1))){
        return false;
    }
    return true;
}
function checkShoeValidity(shoe){
    if (shoe.length < 1) {
        return false;
    }
    if ((shoe[0] !== "R") && (shoe[0] !== "L")){
        return false;
    }
    if (isNaN(parseInt(shoe.slice(1)))){
        return false;
    }
    return true;
}