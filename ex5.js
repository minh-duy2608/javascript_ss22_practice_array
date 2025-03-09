let check = true;
let n;
do {
    n = +prompt("Nhập số lượng phần tử trong mảng: ");

    if (Number.isInteger(n)) {
        check = false;
    }

} while (check);

if (n === 0) {
    alert(`Mảng không có phần tử!`);

} else if (n < 0) {
    alert(`Số lượng phần tử không được âm!`);

} else {
    let input = [];
    for (let i = 0; i < n; i++) {
        do {
            input[i] = prompt(`Nhập phần tử thứ ${i + 1}: `);

            check = input[i].length === 1 ? false : true;

        } while (check);
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        if (Number.isInteger(+input[i])) {
            result += +input[i];
        }
    }

    if (result.length === 0) {
        console.log(`Không có phần tử nào là số!`);

    } else {
        console.log(`Tổng các số trong mảng: ${result}`);

    }

}




