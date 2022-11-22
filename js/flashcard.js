state = 0
function flip(){
    if (state == 0){
        document.querySelector('#flashcard').style.transform = 'rotateY(180deg)';
        state = 1
    }
    else if (state==1){
        document.querySelector('#flashcard').style.transform = 'rotateY(0deg)';
        state = 0
    }
    
}