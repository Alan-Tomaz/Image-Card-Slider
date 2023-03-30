let counter = 1;
var i = 0;
let sliderArray = [];
//let isPressed = 0;
let beforeButton = document.getElementById("before-button");
let afterButton = document.getElementById("after-button");





beforeButton.addEventListener('click', function () {
    clearInterval(autoInterv);
    if (sliderArray[i] != null) {
        clearInterval(sliderArray[i]);
    }
    i++;
    counter--;
    if (counter < 1) {
        counter = 4;
    }
    document.getElementById("radio" + counter).checked = true;
    console.log("Checked = " + counter);
    //isPressed = 1;
    /*setInterval(function () {
            if (isPressed === 1) {
                counter++;
                if (counter > 4) {
                    counter = 1;
                }
                document.getElementById("radio" + counter).checked = true;
                console.log("Checked = " + counter);
                console.log("Interval = 1");
            }
        }, 5000);*/
    sliderArray[i] = setInterval(function () {

        //if (isPressed === 1) {

        counter++;
        if (counter > 4) {
            counter = 1;
        }
        document.getElementById("radio" + counter).checked = true;
        console.log("Checked = " + counter);
        console.log("Interval = 1");

        //}


    }, 5000);
});

afterButton.addEventListener('click', function () {
    clearInterval(autoInterv);
    if (sliderArray[i] != null) {
        clearInterval(sliderArray[i]);
    }
    i++;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
    document.getElementById("radio" + counter).checked = true;
    console.log("Checked = " + counter);
    sliderArray[i] = setInterval(function () {

        counter++;
        if (counter > 4) {
            counter = 1;
        }
        document.getElementById("radio" + counter).checked = true;
        console.log("Checked = " + counter);
        console.log("Interval = 1");


    }, 5000);
});


let autoInterv = setInterval(function () {
    counter++;
    if (counter > 4) {
        counter = 1;
    }
    document.getElementById("radio" + counter).checked = true;
    console.log("Checked = " + counter);
    console.log("Interval = 3");
}, 5000);