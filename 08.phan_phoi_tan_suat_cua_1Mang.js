// Phân phối tần suất của một mảng

//  Đề bài: Tạo một hàm trả về phân phối tần suất của một mảng. Hàm này sẽ trả về một đối tượng, trong đó các khóa là các phần tử duy nhất và các giá trị là tần suất xuất hiện của các phần tử đó.

/**Ví dụ:
    getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

    getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

    getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

    getFrequencies([]) ➞ {}
 */ 

//  ---------- CÁCH 1 DÙNG MAP -------------- //
let getFrequencies_Map = function (arr) {
    let freq = new Map(); // khởi tạo map

    // duyệt qua từng phần tử và đánh dấu thoai
    arr.forEach(item => {
        // Nếu phần tử đó chưa xuất hiện
        if(freq.has(item) == false) {
            freq.set(item, 1);
        }

        // Nếu phần tử đó đã xuất hiện 
        else {
            let old_freq = freq.get(item);

            // tăng lên 1
            freq.set(item, old_freq + 1);
        }
    });

    return freq;
}

let vidu_01 = getFrequencies_Map(["A", "B", "A", "A", "A"]);
let vidu_02 = getFrequencies_Map([1, 2, 3, 3, 2]);
let vidu_03 = getFrequencies_Map([true, false, true, false, false]);
let vidu_0 = getFrequencies_Map([]);


console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_0);

console.log("-----------------------------------------------------");
//  ---------- CÁCH 2 DÙNG Object -------------- //
function getFrequencies_Obj (arr) {
    let obj = new Object(); // khởi tạo một object

    arr.forEach(item => {
        // check xem obj có tồn tại thuộc tính này chưa
        if(obj.hasOwnProperty(item) == false) obj[item] = 1;

        // nếu đã tồn tại thì tăng tần suất xuất hiện
        else obj[item]++;
    });

    return obj;
}

let vidu_04 = getFrequencies_Obj(["A", "B", "A", "A", "A"]);
let vidu_05 = getFrequencies_Obj([1, 2, 3, 3, 2]);
let vidu_06 = getFrequencies_Obj([true, false, true, false, false]);
let vidu_07 = getFrequencies_Obj([]);

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);
console.log(vidu_07);

console.log("-----------------------------------------------------");
//  -------------- CÁCH KHÁC ------------------- //
function getFrequencies(arr) {
    let frequency = {};
  
    // Duyệt qua từng phần tử trong mảng
    for (let element of arr) {
      // Nếu phần tử đã tồn tại trong đối tượng frequency, tăng tần suất lên 1
      if (frequency[element]) {
        frequency[element]++;
      } else {
        // Nếu phần tử chưa tồn tại trong đối tượng, thêm mới và gán tần suất là 1
        frequency[element] = 1;
      }
    }
  
    return frequency;
  }
  
  // Kiểm tra với các ví dụ trong đề bài
  console.log(getFrequencies(["A", "B", "A", "A", "A"])); // { A: 4, B: 1 }
  console.log(getFrequencies([1, 2, 3, 3, 2])); // { "1": 1, "2": 2, "3": 2 }
  console.log(getFrequencies([true, false, true, false, false])); // { true: 2, false: 3 }
  console.log(getFrequencies([])); // {}