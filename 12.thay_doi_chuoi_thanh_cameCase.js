/**     Thay đổi chuỗi thành camelCase

- Đề bài:
    - Sử dụng camelCase là khi từ đầu tiên viết thường, và tất cả các từ sau đó đều viết hoa chữ cái đầu tiên, các chữ còn lại viết thường. Lưu ý rằng không có khoảng trắng giữa các từ!

    - Ví dụ:
        ```
        camelCasing("Hello World") ➞ "helloWorld"
        
        camelCasing("snake_case") ➞ "snakeCase"
        
        camelCasing("low high_HIGH") ➞ "lowHighHigh"
        ```
        
    - Lưu ý:
        - Bạn cần loại bỏ tất cả các khoảng trắng và dấu gạch dưới.
        - Không có số trong đầu vào.
 */

const isAlphaDigit = function (char) {
    if((char >= '0' && char <= '9') || (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))
        return true;
    return false;
}

function camelCasing(str) {
    let arr = str.toLowerCase().split(""); // chuyển chuỗi thành Kí tự thường và tách thành mảng

    // chuyển các kí tự đặc biệt thành khoảng trắng " "
    let ans = arr.map(item => {
        if(!isAlphaDigit(item)) return " "; // nếu là kí tự đặc biệt thì chuyển thành khoảng trắng
        return item;
    });

    ans = ans.map((item, index) => {
        if(ans[index-1] === ' ') return item.toUpperCase();
        return item;
    });
    // upperCase các kí tự đầu tính từ từ thứ 2

    ans = ans.join("").split(" ").join("");
    return ans;
}

let vidu_01 = camelCasing("Hello World")
let vidu_02 = camelCasing("snake_case")
let vidu_03 = camelCasing("low high_HIGH")

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("--------------------------------------------------------------------------");

// -------------------------------- CÁCH 2 ---------------------------------------------------- //

const camelCasing_02 = (str) => {
    // thay thế tất cả kí tự _ thành khoảng trắng, cách trên thì nó hơi tổng quát hơn
    str = str.replace(/_/g, " ");

    // tách từng khoảng trống thành 1 mảng
    let words = str.split(" ");

    // duyệt qua từng từ
    for(let index = 0 ; index < words.length ; index++) {
        // Nếu là từ đầu tiên thì viết thường hết
        if(index === 0)
            words[index] = words[index].toLowerCase();

        else {
            words[index] = words[index][0].toUpperCase() + words[index].slice(1).toLowerCase();
        }
    }
    
    let ans = words.join("");
    return ans;
}

let vidu_04 = camelCasing_02("Hello World")
let vidu_05 = camelCasing_02("snake_case")
let vidu_06 = camelCasing_02("low high_HIGH")

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);