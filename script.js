const buttonsNum = document.querySelector(".buttons")
const userScreen = document.querySelector(".userScren")
const btnExpression = document.querySelector(".btn-expression")
const btnReset = document.querySelector(".btn-reset")
let expression = ""

buttonsNum.addEventListener("click", calcFuction)

function calcFuction(event) {
    let target = event.target;
    if (target.classList.contains('math')) {
        expression += target.innerHTML
        userScreen.value = expression
    }
}
let result

btnExpression.addEventListener("click", calcExpression)

function calcExpression() {
    if (eval(expression) === undefined) window.location.reload();
    else userScreen.value = (eval(expression)).toFixed(2);
    localStorage.setItem("result", userScreen.value);
}

window.addEventListener("load", () => {
    let localStorageItem = localStorage.getItem("result");
    if(localStorageItem !== null) userScreen.value =  localStorageItem;
})

btnReset.addEventListener("click", calcReset)

function calcReset() {
    userScreen.value = "";
    expression = "";
    localStorage.removeItem("result");
}