const notifiCation = document.querySelector("#notify");

const miliSecond = 1000;

// arrow function: không có argument, không có hoisting
const opacityNotify = () => {
    setTimeout(() => {
        console.log("LÀM MỜ");
        notifiCation.classList.add("lamMo");
    }, 5 * miliSecond);
}

opacityNotify();