/**    
 * Đề bài: Yêu cầu tạo một đối tượng lưu trữ các chỉ số của mỗi ký tự trong một mảng, với ký tự là khóa và chỉ số là giá trị.
 * 
 * 
    Đảm bảo rằng:
        Các ký tự là các khóa.
        Các ký tự là các ký hiệu.
        Các chỉ số được lưu trữ trong một mảng và các mảng đó là các giá trị.
    Ví dụ:
    mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

    mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

    mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
 */

// arrow function : không argument, không hoisting
const mapLetters = (str) => {
    let obj = Object(); // khởi tạo object

    let arr = str.split(""); // tách từng kí tự thành mảng

    arr.forEach((item, index) => {
        if(obj[item]) {
            obj[item].push(index);
        }

        else {
            obj[item] = [index];
        }
    });

    return obj;
}

let vidu_01 = mapLetters("dodo");
let vidu_02 = mapLetters("froggy");
let vidu_03 = mapLetters("grapes");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);