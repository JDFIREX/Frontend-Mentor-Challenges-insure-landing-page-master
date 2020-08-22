let hamb = document.querySelector('.nav_item_hamb')
let navOpen = false;
hamb.addEventListener('click', (e) => nav(e))


function nav(e){
    if(!navOpen){
        openNav(e,"images/icon-close.svg","0px","visible")
        navOpen = true;
    }else{
        openNav(e,"images/icon-hamburger.svg","-1500px","hidden")
        navOpen = false;
    }
}

function openNav(e,img,size,visibility){
    let box = document.querySelector('.hamb_box')
    let item = document.querySelectorAll('.nav_item');

    e.path[0].src = img;
    item.forEach(i=> {
        i.style.visibility = visibility;
        i.style.left = size;
    })
    box.style.left = size;
}





window.addEventListener('resize', () => changePattern())
window.addEventListener('load', () => changePattern())
window.addEventListener('change', () => changePattern())


function changePattern(){
    if(window.innerWidth < 800){
        setPattern("images/bg-pattern-intro-right-mobile.svg", "images/bg-pattern-intro-left-mobile.svg","images/bg-pattern-how-we-work-mobile.svg","images/bg-pattern-footer-mobile.svg")
    }
}


function setPattern(HR,HL,WI,FI){
    let HeaderRight = document.querySelector('.intro_right');
    let HeaderLeft = document.querySelector('.intro_left')
    let WorkImg = document.querySelector('.work_img');
    let FooterImg = document.querySelector('.footer_img');
    HeaderRight.src = HR;
    HeaderLeft.src = HL;
    WorkImg.src = WI;
    FooterImg.src = FI;
}