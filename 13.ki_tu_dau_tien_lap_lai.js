/**     Tìm ký tự đầu tiên lặp lại
    Đề bài: Viết một hàm nhận vào một chuỗi và trả về ký tự đầu tiên mà lặp lại. Nếu không có ký tự nào lặp lại, trả về "-1".
    
    Ví dụ:
        firstRepeat("legolas") ➞ "l"

        firstRepeat("Gandalf") ➞ "a"

        firstRepeat("Balrog") ➞ "-1"

        firstRepeat("Isildur") ➞ "-1"
        // Phân biệt chữ hoa chữ thường, "I" không bằng "i"
 */

// Dùng object để đánh dấu tần suât

// Express Function: Có Argument, Không có hoisting
const firstRepeat = function (str) {
    let freq = Object();

    // duyệt qua từng ký tự trong chuỗi
    for(let char of str) {
        if(freq[char]) return char;

        else freq[char] = 1;
    }

    return -1;
}

let vidu_01 = firstRepeat("legolas")
let vidu_02 = firstRepeat("Gandalf")
let vidu_03 = firstRepeat("Balrog")
let vidu_04 = firstRepeat("Isildur")

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);