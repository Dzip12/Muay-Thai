let i = 0;
let images = [];

images[0] = "slike/img-slider-1.png";
images[1] = "slike/img-slider-2.png";
images[2] = "slike/img-slider-3.png";
images[3] = "slike/img-slider-4.png";
images[4] = "slike/img-slider-5.png";
images[5] = "slike/img-slider-6.png";

function slideImg(){

    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout("slideImg()", 3000);
}

window.onload(slideImg());

function toLoginPage(){
    window.location.href = "login.html";
}

function toPlacanjePage(){
    window.location.href = "placanje.html";
}

function validateForm(){
    const cardNumberRegex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    const cardDateRegex = /^[0-9]{2}\/[0-9]{2}$/;
    const cardCVCRegex = /^[0-9]{3}$/;
    const cardNameRegex = /^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+$/;

    const cardNumber = document.getElementById("input-cardNumber").value;
    const cardDate = document.getElementById("input-date").value;
    const cardCVC = document.getElementById("input-code").value;
    const cardName = document.getElementById("input-name").value;

    if (!cardNumberRegex.test(cardNumber) || !cardDateRegex.test(cardDate) || !cardCVCRegex.test(cardCVC) || !cardNameRegex.test(cardName)){
        document.getElementById("placanje-p").textContent = "Neispravni podaci!";
    }
    else{
        window.location.href = "index.html";
    }
}