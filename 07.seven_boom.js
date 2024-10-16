// ### Câu 07: Seven Boom!

// - Đề bài:
//     - Tạo một hàm nhận vào một mảng các số và trả về "Boom!" nếu số 7 xuất hiện trong mảng. Ngược lại, trả về "Không có số 7 trong mảng".
//     - Ví dụ:
        
//         ```
//         sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
        
//         sevenBoom([8, 6, 33, 100]) ➞ "Không có số 7 trong mảng"
        
//         sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"


// Declaration Function: có argument, có hoisting
function sevenBoom(arr) {
    let str = arr.join(""); // kết hợp các phần tử trong mảng lại thành 1 chuỗi

    // check xem trong chuỗi đó có bao gồm kí tự "7" không
    return str.includes("7") ? "Boom" : "Không có số 7 trong mảng"
} 

let vidu_01 = sevenBoom([1, 2, 3, 4, 5, 6, 7]);
let vidu_02 = sevenBoom([8, 6, 33, 100]);
let vidu_03 = sevenBoom([2, 55, 60, 97, 86]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);