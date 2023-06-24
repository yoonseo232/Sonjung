const images = ["img1.png", "img2.png", "img3.png"];
const images2 = ["img4.png", "img5.png", "img6.png"];

function randomImg(){
    const ran = images[Math.round(Math.random() * 2)];
    const ran2 = images2[Math.round(Math.random() * 2)];
    
    const objImg = document.getElementById("recImg1");
    objImg.src = 'images/' + ran;

    const objImg2 = document.getElementById("recImg2");
    objImg2.src = 'images/' + ran2;
}
