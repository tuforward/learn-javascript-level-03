/** Hoán đổi ký tự

- Đề bài:
    - Viết một hàm để thay thế tất cả các ký tự **c1** bằng ký tự **c2** và ngược lại.

    - Ví dụ:
        - doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc”
        - doubleSwap("random w#rds writt&n h&r&", "#", "&") ➞ "random w&rds writt#n h#r#"
        - doubleSwap("128 895 556 788 999", "8", "9") ➞ "129 985 556 799 888"

    - Lưu ý:
        - Cả hai ký tự đều xuất hiện ít nhất một lần trong chuỗi.
 */

// express function: có argument, không hoisting
const doubleSwap = function (str, c1, c2) {
    let arr = str.split(""); // tách chuỗi thành mảng

    let ans = arr.map(item => {
        if(item === c1) item = c2;
        else if(item === c2) item = c1;
        return item;
    });

    ans = ans.join(""); // chuyển thành chuỗi

    return ans;
}

let vidu_01 = doubleSwap( "aabbccc", "a", "b")
let vidu_02 = doubleSwap("random w#rds writt&n h&r&", "#", "&")
let vidu_03 = doubleSwap("128 895 556 788 999", "8", "9")

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);


console.log("-----------------------------------------------");

// ------------ CÁCH KHÁC ---------------------- //
const doubleSwap_02 = (str, c1, c2) => {
    let result = "";
  
    // Duyệt qua từng ký tự trong chuỗi
    for (let char of str) {
      // Nếu ký tự là c1, thay thế bằng c2
      if (char === c1) {
        result += c2;
      }
      // Nếu ký tự là c2, thay thế bằng c1
      else if (char === c2) {
        result += c1;
      }
      // Nếu ký tự không phải c1 hoặc c2, giữ nguyên
      else {
        result += char;
      }
    }
  
    return result;
  };
  
  // Kiểm tra với các ví dụ trong đề bài
  console.log(doubleSwap_02("aabbccc", "a", "b")); // "bbaaccc"
  console.log(doubleSwap_02("random w#rds writt&n h&r&", "#", "&")); // "random w&rds writt#n h#r#"
  console.log(doubleSwap_02("128 895 556 788 999", "8", "9")); // "129 985 556 799 888"