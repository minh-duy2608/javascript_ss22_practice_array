let choice;
let arr = [];
let n;
let check = true;

do {
    choice = +prompt('================== MENU ===================\n\n1.Nhập số phần tử cần nhập và giá trị các phần tử\n2.In ra giá trị các phần tử đang quản lý\n3.In ra giá trị các phần tử chẵn và tính tổng\n4.In ra giá trị lớn nhất và nhỏ nhất trong mảng\n5.In ra các phần tử là số nguyên tố trong mảng và tính tổng\n6.Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n7.Thêm một phần từ vào vị trí chỉ định\n8.Thoát\n\n==========================================\n\nLựa chọn của bạn: ');

    switch (choice) {
        case 1: {
            do {
                n = +prompt("Nhập số phần tử của mảng: ");

                check = !Number.isInteger(n) || isNaN(n) || n < 1 ? true : false;

            } while (check);

            for (let i = 0; i < n; i++) {
                do {
                    arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}: `);

                    check = Number.isInteger(arr[i]) ? false : true;
                } while (check);
            }
            alert(`Nhập thành công!`);

            break;
        }
        case 2: {
            console.log("Mảng quản lý: ", arr);
            break;
        }
        case 3: {
            let sum = 0;
            let arrEven = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    arrEven.push(arr[i]);
                    sum += arr[i];
                }
            }

            console.log("Các số chẵn trong danh sách: ", arrEven);
            console.log("Tổng các số chẵn: ", sum);

            break;
        }
        case 4: {
            let min = arr[0], max = arr[0];

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log(`Max: ${max}  -  Min: ${min}`);
            break;
        }
        case 5: {
            let sum = 0;
            let arrElement = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] >= 2) {
                    check = true;
                    for (let j = 2; j < arr[i] - 1; j++) {
                        if (arr[i] % j === 0) {
                            check = false;
                            break;
                        }
                    }

                    if (check === true) {
                        arrElement.push(arr[i]);
                        sum += arr[i];
                    }
                }
            }

            console.log("Các số nguyên tố trong danh sách: ", arrElement);
            console.log("Tổng: ", sum);

            break;
        }
        case 6: {
            let numberCheck;
            let count = 0;
            do {
                numberCheck = +prompt("Nhập số cần kiểm tra: ");
                check = isNaN(numberCheck) ? true : false;

            } while (check);

            for (let i = 0; i < arr.length; i++) {
                if (numberCheck === arr[i]) {
                    count++;
                }
            }

            count === 0 ? alert(`Số ${numberCheck} không tồn tại trong ds!`) : alert(`Số ${numberCheck} xuất hiện ${count} lần!`);

            break;
        }
        case 7: {
            let index, value;
            do {
                index = +prompt("Nhập vị trí thêm: ");
                check = Number.isInteger(index) && index >= 0 && index <= arr.length ? false : true;
                if (check) alert("Vị trí không hợp lệ!");
            } while (check);

            do {
                value = +prompt("Nhập giá trị thêm: ");
                check = isNaN(value) ? true : false;
                if (check) alert("Giá trị không hợp lệ!");
            } while (check);

            arr.splice(index, 0, value);
            alert("Thêm thành công!");

            break;
        }
        case 8: {
            alert(`Bạn chọn thoát!`);
            break;
        }
        default: {
            alert(`Vui lòng chọn đúng menu(1-8)!`);
            break;
        }
    }

} while (choice !== 8);
