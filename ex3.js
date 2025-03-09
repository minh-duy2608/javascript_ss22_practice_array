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
    alert(`Số lượng phần tử không hợp lệ!`);

} else {
    let numbers = [];
    let input;
    for (let i = 0; i < n; i++) {
        do {
            input = +prompt(`Nhập phần tử thứ ${i + 1}: `);
            if (isNaN(input)) {
                check = true;
            } else {
                check = false;
            }

        } while (check);

        numbers[i] = input;
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (Number.isInteger(numbers[i]) && numbers[i] < 0) {
            count++;
        }
    }

    if (count === 0) {
        console.log(`Không có số nguyên âm trong mảng!`);

    } else {
        console.log(`Số lượng số nguyên âm: ${count}`);

    }

}
