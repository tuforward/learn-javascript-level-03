const button = document.querySelector(".btn");

if(button) {
    // lắng nghe sự kiện nhấn nút
    button.addEventListener("click", (event) => {
        // click xong thì 5 giây sau đổi màu đổi kích thước
        setTimeout(() => {
            button.classList.add("btn-big");
        }, 5000);
    });
}