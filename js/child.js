let navButton = document.querySelector('.navclick');
let nav =document.querySelector('.nav');
let navUl = document.querySelector('.nav ul');
let navoff = document.querySelector('.nav p')
let wrap = document.querySelector('.wrap');//外框


wrap.style.height = innerHeight+"px";
window.onresize =function(){
    wrap.style.height = innerHeight+"px";
};
//選單高度自適應
navUl.style.height = innerHeight+"px";
window.onresize =function(){
    navUl.style.height = innerHeight+"px";
};

// wrap.classList.add("wrapbg") nav展開改變

navButton.onclick=function(){ //選單展開
    nav.style.left =0;
    setTimeout("nav.classList.add('bgmed')",350);
    
};

navoff.onclick=function(){//選單收回
    nav.style.left =-100+"%";
    nav.classList.remove("bgmed");
}
//以上選單

let contact =document.querySelectorAll('.mainContact a');

for (let i = 0; i < contact.length; i++) {
    contact[i].addEventListener('click',contactNotify,false)
}


function contactNotify(e){
    e.preventDefault()
    alert('尚在建立中，請見諒')
}


// 滾動後廣告
let ad = document.querySelector('.ad')
let footerId =document.getElementById('footerId')
let main =document.querySelector('.main')
let icon = document.querySelector('.icon')
//qureyselector其實可以使用.offsettop，只是無法跳出emmet
function adscroll(){
    if(main.offsetHeight < 830){return}
    if(window.scrollY >= 148 && window.scrollY < footerId.offsetTop - 700){
        ad.classList.add('fixed')
        ad.classList.remove('absolute')
        icon.classList.remove('active')
    }
    else if(window.scrollY >= footerId.offsetTop - 700){
        ad.classList.add('absolute')
        icon.classList.add('active')
    }else{
        icon.classList.remove('active')
        ad.classList.remove('fixed')
        ad.classList.remove('absolute')
    }
}

window.addEventListener('scroll',adscroll,false)


