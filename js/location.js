var black = document.querySelectorAll('.location--black');
var white = document.querySelectorAll('.location--white');
var blue = document.querySelectorAll('.location--blue');
var pink = document.querySelectorAll('.location--pink');

black.forEach(el => {
    el.addEventListener('click', () => {
        document.location.href = './black_bag.html';
    })
});

white.forEach(el => {
    el.addEventListener('click', () => {
        document.location.href = './white_bag.html';
    })
});

blue.forEach(el => {
    el.addEventListener('click', () => {
        document.location.href = './blue_bag.html';
    })
});

pink.forEach(el => {
    el.addEventListener('click', () => {
        document.location.href = './pink_bag.html';
    })
});