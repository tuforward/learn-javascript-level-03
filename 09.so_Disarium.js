/** Số Disarium
    Đề bài: Một số được gọi là Disarium nếu tổng của các chữ số mũ với vị trí tương ứng của chúng là chính số đó.

    Ví dụ:
        isDisarium(75) ➞ false // 7^1 + 5^2 = 7 + 25 = 32
        
        isDisarium(135) ➞ true // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135


    isDisarium(544) ➞ false

    isDisarium(518) ➞ true

    isDisarium(8) ➞ true

    isDisarium(466) ➞ false
 */

// arrow function: không argument, không hoisting

const isDisarium = (number) => {
    let arr = number.toString().split(""); // tách thành mảng
    // console.log(arr);
    // tính toán
    let diSaRiUm =  arr.reduce((sum, currentValue, currentIndex) => sum += Math.pow(+currentValue, currentIndex + 1), 0);

    return number === diSaRiUm;
}

let vidu_01 = isDisarium(75);
let vidu_02 = isDisarium(518);
let vidu_03 = isDisarium(8);
let vidu_04 = isDisarium(466);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);