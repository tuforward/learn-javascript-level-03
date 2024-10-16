// ĐỊNH NGHĨA 1 Mili giây
const miliSecond = 1000;

const notifiCation = document.querySelector("[noti]");

// declaration function: có argument, không có hoisting
function opacityTutu () {
    let opacity = 1; // opacity ban đầu

    const timer = setInterval(() => {
        console.log("LÀM MỜ", opacity);
        if(opacity <= 0) {
            clearInterval(timer); // khi opacity <= 0 thì xóa không cho lặp lại nữa. Rồi sau đó ẩn luôn cái thông báo
            
            notifiCation.setAttribute("show", "no");
        }

        else {
            notifiCation.style.opacity = opacity; // gán độ mờ

            opacity -= 0.1; // giảm 10% độ hiển thị
        }
    }, 2 * miliSecond); // mỗi 100 micro giây sẽ mờ 1 ít
}

// sau 5 giây nó sẽ mờ từ từ
setTimeout(opacityTutu ,5 * miliSecond);