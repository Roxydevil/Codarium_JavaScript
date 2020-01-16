var popup = document.querySelector('.pop-up');
var btnYes = document.getElementById("buttonYes");
var btnNo = document.getElementById("buttonNo");

var mouseY = 0;
var offsetY = 0;

var mouseX = 0;
var offsetX = 0;


function showCoords(event) {
    mouseY = event.clientY;
    mouseX = event.clientX;
    offsetY = Math.round(popup.offsetTop - mouseY);
    offsetX = Math.round(popup.offsetLeft - mouseX);
    /*
    console.log('  mouseX ' + mouseX + 
                '  popupX ' + popup.offsetLeft +
                '  offsetX ' + offsetX);
    */
    if (null !== popup) {
        //Проверка нахождения курсора в области НЕТ по горизонтали
        if (mouseX > (popup.offsetLeft + 340) && mouseX < (popup.offsetLeft + 510)) {

            //Движение по вертикали
            if (offsetY < 10 && mouseY < popup.offsetTop) {
                popup.style.top = popup.offsetTop + 10 + "px";
            }
            else if (offsetY > -210 && mouseY > popup.offsetTop + 80) {
                popup.style.top = popup.offsetTop - 10 + "px";
            }
        }


        //Проверка нахождения курсора в области НЕТ по вертикали
        if (mouseY > (popup.offsetTop - 10) && mouseY < (popup.offsetTop + 210)) {
            //Движение по горизонтали
            if (offsetX < -340 && mouseX < (popup.offsetLeft + 400)) {
                popup.style.left = popup.offsetLeft + 10 + "px";
            }
            else if (offsetX > -510 && mouseX > (popup.offsetLeft + 400)) {
                popup.style.left = popup.offsetLeft - 10 + "px";
            }
        }
    }

    //Видимость кнопки ДА
    if (mouseX > popup.offsetLeft + 50 && mouseX < popup.offsetLeft + 70) {
        btnYes.classList.add("visible");
        btnNo.classList.add("margin");
    }

    //Выход окна за границы
    if (popup.offsetLeft < 0) {
        console.log('Выход окна за границы по горизонтали');
        popup.style.left = (document.documentElement.clientWidth / 2) -260 + "px";
    }
    if (popup.offsetTop < 0) {
        console.log('Выход окна за границы по высоте');
        popup.style.top = (document.documentElement.clientHeight / 2) -100 + "px";
    }
    if (popup.offsetLeft + 510 > document.documentElement.clientWidth) {
        console.log('Выход окна за границы по горизонтали');
        popup.style.left = (document.documentElement.clientWidth / 2) - 260 + "px";
    }
    if (popup.offsetTop + 210 > document.documentElement.clientHeight) {
        console.log('Выход окна за границы по высоте');
        popup.style.top = (document.documentElement.clientHeight / 2) - 100 + "px";
    }
}

//Кнопка ДА
if (null !== buttonYes) {
    buttonYes.onclick = function () {
        console.log('Button yes is clicked');
        popup.style.display = "none";
        alert('Молодец');
    }
}







