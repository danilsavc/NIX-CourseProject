var btn_bag = document.querySelectorAll('.main--rightbar--goods--content--info--BasketAndRate--basket');
var bag_price = 0;
var bag = document.getElementById("bag");
var btn_bag_goods = document.querySelector('.main--content--center--price--btns--includes--inBag');

btn_bag.forEach (btn => {
    btn.addEventListener ('click', () => {
        if (btn.getAttribute('active') == 'disabled') {
            btn.setAttribute('active', 'enabled');
            let temp = btn.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[1].innerText;
            temp = +concat(temp);
            bag_price += temp;
            btn.style.backgroundColor = "#ffffff";
            btn.childNodes[1].style.color = "#181818";
            btn.childNodes[1].innerHTML = "У кошику"
        }
        else {
            btn.setAttribute('active', 'disabled');
            let temp = btn.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[1].innerText;
            temp = +concat(temp);
            bag_price -= temp;
            btn.style.backgroundColor = "#181818";
            btn.childNodes[1].style.color = "#ffffff";
            btn.childNodes[1].innerHTML = "В кошик"
        }
        upload_bag();
    })
})

btn_bag_goods.addEventListener ('click', () => {
    if (btn_bag_goods.getAttribute('active') == 'disabled') {
        btn_bag_goods.setAttribute('active', 'enabled');
        let temp = btn_bag_goods.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].innerHTML;
        temp = +concat(temp);
        bag_price += temp;
        btn_bag_goods.style.backgroundColor = "#ffffff";
        btn_bag_goods.childNodes[1].style.color = "#181818";
        btn_bag_goods.childNodes[1].innerHTML = "У кошику"
        btn_bag_goods.style.border = '1px solid black'
    }
    else {
        btn_bag_goods.setAttribute('active', 'disabled');
        let temp = btn_bag_goods.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].innerHTML;
        temp = +concat(temp);
        bag_price -= temp;
        btn_bag_goods.style.backgroundColor = "#181818";
        btn_bag_goods.childNodes[1].style.color = "#ffffff";
        btn_bag_goods.childNodes[1].innerHTML = "В кошик"
    }
    upload_bag();
})

function upload_bag () {
    bag.innerHTML = bag_price + ' $';
}

function concat (str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            break;
        }
        res += str[i];
    }
    return res;
}