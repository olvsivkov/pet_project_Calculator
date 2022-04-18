let calc = document.querySelector(".calculator")

calc.onmousedown = function(event) {

    let shiftX = event.clientX - calc.getBoundingClientRect().left;
    let shiftY = event.clientY - calc.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        calc.style.left = pageX - shiftX + 'px';
        calc.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    calc.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        calc.onmouseup = null;
    };
};

calc.ondragstart = function() {
    return false;
};