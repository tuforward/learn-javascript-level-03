// lấy theo id sử dụng cách 1
const Element_01 = document.getElementById("element_01");

// sau 5 giây sẽ thay đổi nội dung phần tử
setTimeout(() => {
    Element_01.innerHTML = "Nội Dung Mới 01";
}, 5000);


// lấy theo id sử dụng cách 2
const Element_02 = document.querySelector("#element_02");

// sau 10 giây sẽ thay đổi nội dung phần tử
setTimeout(function () {
    Element_02.innerHTML = "Nội Dung Mới 02";
}, 10000);

