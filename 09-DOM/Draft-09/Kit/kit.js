
function  subClick()
{
    const subScribe = document.querySelector('.js-subBtn');
    if(subScribe.innerHTML === 'Subscribe'){
        subScribe.innerHTML = 'Subscribed';
        subScribe.classList.add('subBtnClick');  
    }
    else{ subScribe.innerHTML = 'Subscribe'; subScribe.classList.remove('subBtnClick'); };  
};

function calc(){
    const inputValue = document.querySelector('.js-input');
    let totalCost = Number(inputValue.value);
    if (totalCost < 40){
        totalCost +=10;
    }
    console.log(`$${totalCost}`);
}
