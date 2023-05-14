let offset=0; //смещение от левого края
const sliderLine= document.querySelector ('.sliderkart');
document.querySelector ('.sliderNext').addEventListener('click',function(){
    offset = offset + 103;
    if (offset > 309){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector ('.sliderPrev').addEventListener('click',function(){
    offset = offset - 103;
    if (offset < 0){
        offset = 309;
    }
    sliderLine.style.left = -offset + 'px';
})
