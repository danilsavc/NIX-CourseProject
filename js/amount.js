var left = document.querySelector('.main--content--center--amount--includes--left--img');
var right = document.querySelector('.main--content--center--amount--includes--right--img');
var num = document.querySelector('.amount--goods');
var price = document.querySelector('.price');
var numInt = 1;

right.addEventListener('click', () =>  {
    console.log('asd');
    numInt++;
    let temp = right.parentNode.parentNode.parentNode.parentNode.childNodes[11].childNodes[3].childNodes[1].innerText;
    temp = +concat(temp) + 123;
    num.innerHTML = numInt;
    price.innerHTML = temp + ' $';
    console.log(temp);
})

left.addEventListener('click', () =>  {
    if (numInt > 1) {
        console.log('asd');
        numInt--;
        let temp = right.parentNode.parentNode.parentNode.parentNode.childNodes[11].childNodes[3].childNodes[1].innerText;
        temp = +concat(temp) - 123;
        num.innerHTML = numInt;
        price.innerHTML = temp + ' $';
        console.log(temp);
    }
})