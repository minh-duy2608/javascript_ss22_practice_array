let input = prompt("Nhập chuỗi số: ");

input = input.split(" ");

let check = 0;
for (let i = 0; i < input.length; i++) {
    if (!Number.isInteger(+input[i])) {
        check = 1;
        break;
    }
}

if (check === 0) {
    let max = +input[0];
    let index = 0;

    for (let i = 0; i < input.length; i++) {
        if (+input[i] > max) {
            max = input[i];
            index = i;
        }
    }

    console.log(`max: ${max} - index: ${index}`);


} else {
    alert(`Chuỗi không hợp lệ!`);
}
