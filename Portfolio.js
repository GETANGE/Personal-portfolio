let circularProgress=document.querySelector('.skill-container');
let valueProgress=document.querySelector('.round-value');

let progressStartValue=0
let progressEndValue=90;

let progress=setInterval(function(){
    progressStartValue++;

    valueProgress.textContent = `${progressStartValue}%`
    circularProgress.style.background=`conic-gradient(aqua, ${progressStartValue *3.6}deg ,#1f242d 0deg)`
    if(progressStartValue==progressEndValue){
        clearInterval(progress)
    }
},10)