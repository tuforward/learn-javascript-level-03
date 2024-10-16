const notifiCation = document.querySelector(".notification");

const miliSecond = 1000;

// expression function: có tham số argument, không có hoisting
const cloasTab_02 = function () {
    notifiCation.style.display = "none";
}

if(notifiCation) {
    setTimeout(cloasTab_02, 10 * miliSecond);
}

// declaraction function: có tham số argument, có hoisting
function closeTab () {
    notifiCation.classList.add("hidden");
}


