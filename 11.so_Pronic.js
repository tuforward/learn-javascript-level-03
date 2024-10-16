/** Số Pronic
    Đề bài: Một số pronic (hay còn được gọi là heteromecic) là một số được tạo ra bởi tích của hai số nguyên liên tiếp, nghĩa là, một số có dạng n(n + 1).

    Tạo một hàm để xác định xem một số có phải là pronic hay không.
    
    Ví dụ:
        isHeteromecic(0) ➞ true // 0 * (0 + 1) = 0 * 1 = 0
        
        isHeteromecic(2) ➞ true // 1 * (1 + 1) = 1 * 2 = 2
        
        isHeteromecic(7) ➞ false

        isHeteromecic(110) ➞ true // 10 * (10 + 1) = 10 * 11 = 110

        isHeteromecic(136) ➞ false

        isHeteromecic(156) ➞ true
 */

// declaration function: có arugment, có hoisting

function isHeteromecic(number) {
    let index = 0;
    let calc = 0;

    while(calc <= number) {
        calc = index * (index + 1);

        if(calc === number) return true;

        index++;
    }

    return false; // sai
}

let vidu_01 = isHeteromecic(0);
let vidu_02 = isHeteromecic(2);
let vidu_03 = isHeteromecic(7);
let vidu_04 = isHeteromecic(110);
let vidu_05 = isHeteromecic(136);
let vidu_06 = isHeteromecic(156);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);


console.log("------------------------------------------------------------------------");
// ------------- CÁCH KHÁC -------------------- //
function isHeteromecic_02(num) {
    // Kiểm tra xem có tồn tại một số nguyên n sao cho n * (n + 1) = num hay không
    for (let n = 0; n * (n + 1) <= num; n++) {
      if (n * (n + 1) === num) {
        return true;
      }
    }
    return false;
  }
  
  // Kiểm tra với các ví dụ trong đề bài
  console.log(isHeteromecic_02(0)); // true
  console.log(isHeteromecic_02(2)); // true
  console.log(isHeteromecic_02(7)); // false
  console.log(isHeteromecic_02(110)); // true
  console.log(isHeteromecic_02(136)); // false
  console.log(isHeteromecic_02(156)); // true