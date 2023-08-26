const circularProgress=document.querySelector('.skill-container');
const valueProgress=document.querySelector('.round-value');
const circularProgress1=document.querySelector('#skill-container1');
const valueProgress1=document.querySelector('#round-value1');
const circularProgress2 = document.querySelector('#circularProgress2');
const valueProgress2 = document.querySelector('#round-value2');
const circularProgress3 = document.querySelector("#circularProgress3");
const valueProgress3 = document.querySelector("#round-value3");


const  option=function(){

let progressStartValue=0
const progressEndValue=60;
const progress=setInterval(function(){
    progressStartValue++;

    valueProgress.textContent = `${progressStartValue}%`
    circularProgress.style.background=`conic-gradient(goldenrod, ${progressStartValue *3.6}deg ,#1f242d 0deg)`
    if(progressStartValue==progressEndValue){
        clearInterval(progress)
    }
},10)
}
option();

function html(){
    let progressStartValue1=0
    const progressEndValue1=99;

    const progress1=setInterval(function(){
    progressStartValue1++;

    valueProgress1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background=`conic-gradient(goldenrod, ${progressStartValue1 *3.6}deg ,#1f242d 0deg)`
    if(progressStartValue1==progressEndValue1){
        clearInterval(progress1)
    }
  },10)
}
html();

function css(){
    let progressStartValue2=0;
    const progressEndValue2=80;

    let progress2=setInterval(function(){
        progressStartValue2++;

        valueProgress2.textContent = `${progressStartValue2}%`;
        circularProgress2.style.background=`conic-gradient(goldenrod, ${progressStartValue2 *3.6}deg ,#1f242d 0deg)`
        if(progressStartValue2==progressEndValue2){
            clearInterval(progress2);
        }
    },10)
}
css();

function react(){
    let progressStartValue3 = 0;
    const progressEndValue3 = 60;

    const progress3 = setInterval(function(){
        progressStartValue3++;

        valueProgress3.textContent = `${progressStartValue3}%`;
        circularProgress3.style.background=`conic-gradient(goldenrod, ${progressStartValue3 *3.6}deg ,#1f242d 0deg)`;
        if(progressStartValue3==progressEndValue3){
            clearInterval(progress3);
        }
    },10)
}
react();