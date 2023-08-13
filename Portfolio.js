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
    let circularProgress2 = document.querySelector('#circularProgress2');
    let valueProgress2 = document.querySelector('#round-value2');

    let progressStartValue2=0;
    let progressEndValue2=80;

    let progress2=setInterval(function(){
        progressStartValue2++;

        valueProgress2.textContent = `${progressStartValue2}%`;
        circularProgress2.style.background=`conic-gradient(aqua, ${progressStartValue2 *3.6}deg ,#1f242d 0deg)`
        if(progressStartValue2==progressEndValue2){
            clearInterval(progress2);
        }
    },10)
}
css();

function react(){
    let circularProgress3 = document.querySelector("#circularProgress3");
    let valueProgress3 = document.querySelector("#round-value3");

    let progressStartValue3 = 0;
    let progressEndValue3 = 60;

    let progress3 = setInterval(function(){
        progressStartValue3++;

        valueProgress3.textContent = `${progressStartValue3}%`;
        circularProgress3.style.background=`conic-gradient(aqua, ${progressStartValue3 *3.6}deg ,#1f242d 0deg)`;
        if(progressStartValue3==progressEndValue3){
            clearInterval(progress3);
        }
    },10)
}
react();