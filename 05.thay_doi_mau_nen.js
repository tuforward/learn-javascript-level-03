// lấy luôn thẻ body
const tagBody = document.body;

// sau 5s đổi màu nền thành blue
setTimeout(function () {
    tagBody.style.backgroundColor = "blue";
}, 5000);

// dùng thẻ getElementsByTagName để lấy tên thẻ luôn cũng được



// cách 2
setTimeout(() => {
    document.getElementsByTagName("body")[0].style.background = "#FECF73";
}, 10000);