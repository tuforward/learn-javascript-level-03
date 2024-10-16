// lấy danh sách các phần tử có class là title
const listClassTitle = document.querySelectorAll(".title");

// sau 5 giây đổi màu chư thành màu xanh blue
setTimeout(() => {
    listClassTitle.forEach(item => item.style.color = "blue");
}, 5000);

// không thể dùng hàm getElementByClassName vì hàm này chỉ lấy được một phần tử