let arr = ["JavaScript", 0, null, true, 7, " "];


for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
        arr.splice(i, 1);
        i--;
    }
}

console.log("result: ", arr);