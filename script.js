const buttonsNum = document.querySelector(".buttons")
const userScren = document.querySelector(".userScren")
const btnExpression = document.querySelector(".btn-expression")
const btnReset = document.querySelector(".btn-reset")
let expression = ""

buttonsNum.addEventListener("click", calcFuction)

function calcFuction(event) {
    let target = event.target;
    if (target.classList.contains('math')) {
        expression += target.innerHTML
        userScren.value = expression
    }
}

btnExpression.addEventListener("click", calcExpression)

function calcExpression() {
    if (eval(expression) === undefined) window.location.reload();
    else userScren.value = (eval(expression)).toFixed(2);
    //expression = "";
}

btnReset.addEventListener("click", calcReset)

function calcReset() {
    userScren.value = ""
    window.location.reload();
}