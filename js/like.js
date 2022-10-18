var like = document.getElementById("like")
var like_amount = 0;
var like__btns = document.querySelectorAll(".main--rightbar--goods--content--img--heart--box--img");

like__btns.forEach (btn => {
    btn.addEventListener ('click', () => {
        if (btn.getAttribute('active') == 'disabled') {
            btn.setAttribute('active', 'enabled');
            btn.style.backgroundImage = "url('image/main/heart_black.svg')";
            like_amount++;
        }
        else {
            btn.setAttribute('active', 'disabled');
            btn.style.backgroundImage = "url('image/main/heart_white.svg')";
            like_amount--;
        }
        upload();
    })
})

function upload () {
    like.innerHTML = like_amount + ' шт';
}