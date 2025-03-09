let check = true;
let n;
do {
    n = +prompt("Nhập số lượng phần tử trong mảng: ");

    if (Number.isInteger(n)) {
        check = false;
    }

} while (check);

if (n === 0) {
    alert(`Mảng không có phần tử nào!`);

} else if (n < 0) {
    alert(`Số lượng phần tử không được nhỏ hơn 0!`);

} else {
    let input = [];
    for (let i = 0; i < n; i++) {
        do {
            input[i] = +prompt(`Nhập phần tử thứ ${i + 1}: `);

            check = Number.isInteger(input[i]) ? false : true;

        } while (check);
    }

    let max = input[0];
    for (let i = 0; i < n; i++) {
        if (+input[i] > max) {
            max = +input[i];
        }
    }

    let max2 = input[0];
    for (let i = 0; i < n; i++) {
        if (+input[i] >= max2 && +input[i] < max) {
            max2 = +input[i];
        }
    }

    console.log(input);

    console.log("max2: ", max2);
}
