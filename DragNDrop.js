let calc = document.querySelector(".calculator")

let shiftX
let shiftY

calc.onmousedown = function(event) {

    shiftX = event.clientX - calc.getBoundingClientRect().left;
    shiftY = event.clientY - calc.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);

    

    function moveAt(pageX, pageY) {
        calc.style.left = pageX - shiftX + 'px';
        calc.style.top = pageY - shiftY + 'px';
    }


    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        console.log(event.pageX)
        console.log(event.pageY)
        localStorage.setItem("pageX", event.pageX);
        localStorage.setItem("pageY", event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    calc.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        calc.onmouseup = null;
    };
};


    window.addEventListener("load", () => {
        let localStoragePageX = localStorage.getItem("pageX");
        let localStoragePageY = localStorage.getItem("pageY");
        if(localStoragePageX !== null) calc.style.left = localStoragePageX + 'px';
        if(localStoragePageY !== null) calc.style.top = localStoragePageY + 'px';
    })


calc.ondragstart = function() {
    return false;
};