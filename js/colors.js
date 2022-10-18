var blue = document.querySelectorAll('.main--rightbar--goods--content--info--colors--blue');
var black = document.querySelectorAll('.main--rightbar--goods--content--info--colors--black');
var white = document.querySelectorAll('.main--rightbar--goods--content--info--colors--white');
var pink = document.querySelectorAll('.main--rightbar--goods--content--info--colors--pink');
var blue_goods = document.querySelectorAll('.main--contetnt--center--colors--absent--img');
var black_goods = document.querySelectorAll('.main--contetnt--center--colors--black--img');
var white_goods = document.querySelectorAll('.main--contetnt--center--colors--white--img');
var pink_goods = document.querySelectorAll('.main--contetnt--center--colors--pink--img');

var includ = document.querySelectorAll('.main--contetnt--center--colors--includes');
var includ_index = 0;

console.log(includ);


blue.forEach(change => {
    change.addEventListener('click', () =>  {
        console.log(change.parentNode.parentNode.parentNode.childNodes[1]);
        change.parentNode.parentNode.parentNode.childNodes[1].style.backgroundImage = "url(image/main/bag_blue.png";
    })
})

black.forEach(change => {
    change.addEventListener('click', () =>  {
        console.log(change.parentNode.parentNode.parentNode.childNodes[1]);
        change.parentNode.parentNode.parentNode.childNodes[1].style.backgroundImage = "url(image/main/bag_black.png";
    })
})

white.forEach(change => {
    change.addEventListener('click', () =>  {
        console.log(change.parentNode.parentNode.parentNode.childNodes[1]);
        change.parentNode.parentNode.parentNode.childNodes[1].style.backgroundImage = "url(image/main/bag_white.png";
    })
})

pink.forEach(change => {
    change.addEventListener('click', () =>  {
        console.log(change.parentNode.parentNode.parentNode.childNodes[1]);
        change.parentNode.parentNode.parentNode.childNodes[1].style.backgroundImage = "url(image/main/bag_pink.png";
    })
})

includ.forEach(brd => {
    brd.addEventListener('click', () => {
        includ.forEach(brd2 => {
            brd2.style.border = 'none';
        })
        brd.style = 'border: 2px solid black; border-radius: 10px';
    })
})

blue_goods.forEach(change => {
    change.addEventListener('click', () =>  {
        change.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].style.backgroundImage = "url(image/main/bag_blue_svg.svg";
    })
})

black_goods.forEach(change => {
    change.addEventListener('click', () =>  {
        change.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].style.backgroundImage = "url(image/main/bag_black_svg.svg";
    })
})

white_goods.forEach(change => {
    change.addEventListener('click', () =>  {
        change.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].style.backgroundImage = "url(image/main/bag_white_svg.svg";
    })
})

pink_goods.forEach(change => {
    change.addEventListener('click', () =>  {
        change.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].style.backgroundImage = "url(image/main/bag_pink_svg.svg";
    })
})