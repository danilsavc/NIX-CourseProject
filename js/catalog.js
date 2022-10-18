var dropdown = document.querySelectorAll(".main--leftbar--catalog--content");

dropdown.forEach(drop => {
    drop.addEventListener('click', () =>  {
        var dropdownContent = drop.nextElementSibling;
        if (dropdownContent.style.opacity == "1") {
            dropdownContent.style.display = "none";
            dropdownContent.style.opacity = "0"
            // dropdownContent.style.height = "0";
            drop.style.marginTop = "0";
            drop.childNodes[3].style.backgroundImage = "url('image/main/down.svg')";
            
        } 
        else {
            dropdownContent.style.display = "block";
            dropdownContent.style.opacity = "1";
            drop.style.marginTop = "38px";
            drop.childNodes[3].style.backgroundImage = "url('image/main/up.svg')";
        }
    })
})