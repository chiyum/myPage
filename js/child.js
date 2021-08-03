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
    navoff.classList.remove("hide");
    setTimeout("nav.classList.add('bgmed')",350);
    
};

navoff.onclick=function(){//選單收回
    nav.style.left =-100+"%";
    navoff.classList.add("hide");
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
