let circularProgress=document.querySelector('.skill-container');
let valueProgress=document.querySelector('.round-value');

let progressStartValue=0
let progressEndValue=60;

let progress=setInterval(function(){
    progressStartValue++;

    valueProgress.textContent = `${progressStartValue}%`
    circularProgress.style.background=`conic-gradient(aqua, ${progressStartValue *3.6}deg ,#1f242d 0deg)`
    if(progressStartValue==progressEndValue){
        clearInterval(progress)
    }
},10)

function html(){
    let circularProgress1=document.querySelector('#skill-container1');
    let valueProgress1=document.querySelector('#round-value1');

    let progressStartValue1=0
    let progressEndValue1=99;

    let progress1=setInterval(function(){
    progressStartValue1++;

    valueProgress1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background=`conic-gradient(aqua, ${progressStartValue1 *3.6}deg ,#1f242d 0deg)`
    if(progressStartValue1==progressEndValue1){
        clearInterval(progress1)
    }
  },10)
}
html();

function css(){

}

function react(){

}
function mysql(){
    
}