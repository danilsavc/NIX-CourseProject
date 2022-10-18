var one = document.querySelector(".main--content--center--scale--blocks--one");
var two = document.querySelector(".main--content--center--scale--blocks--two");
var size = document.querySelectorAll(".size--block");

size.forEach (size_btn => {
    size_btn.addEventListener ('click', () => {
        size.forEach(size_btn2 => {
            size_btn2.style.border = 'none';
        })
        size_btn.style.border = '1px solid black';
    })
})
