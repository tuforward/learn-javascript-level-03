/**         Số nhiều!

- Đề bài:
    - Viết một hàm nhận vào một danh sách các từ ở dạng số ít và trả về một tập hợp các từ ở dạng số nhiều nếu chúng xuất hiện nhiều hơn một lần trong danh sách.
    - Ví dụ:
        
        ```
        pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]
        
        pluralize(["table", "table", "table"]) ➞ ["tables"]
        
        pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]
        ```
        
    - Lưu ý:
        - Chỉ tập trung vào việc có nên thêm chữ **s** vào cuối từ hay không.
 */

// declaration function: có argument, có tính hoisting
function pluralize(arr) {
    let freq = Object(); // khởi tạo một object

    // duyệt qua từng từ trong mảng
    arr.forEach(item => {
        if(freq[item])  freq[item]++;
            
        else freq[item] = 1;
    });

    let ans = new Array(); // mảng kết quả

    // duyệt qua từng phần tử trong object
    for(let [key, value] of Object.entries(freq)) {
        // nếu tần suất xuất hiện > 1
        if(value > 1) key = key + "s"; // thêm s vì là số nhiều

        ans.push(key);
    }

    return ans;
}

let vidu_01 = pluralize(["cow", "pig", "cow", "cow"])
let vidu_02 = pluralize(["table", "table", "table"])
let vidu_03 = pluralize(["chair", "pencil", "arm"])

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);