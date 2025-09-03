let slider = document.querySelector(".slider");
let contador = 0;
let img = [
    'gtr350_primeira_Image.jfif',
    'gtr350_segunda_Image.jfif',
    'gtr350_terceira_Image.jfif'
]


function sliderShow(){
    slider.src  = img[contador];

    if(contador < img.length - 1){
        contador++;
    }else{
        contador = 0;
    }
    setTimeout("sliderShow()", 2000);
}

window.onload = function(){
    sliderShow();
}