let navButton = document.querySelector('.navbutton');
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
    nav.style.left =0
    navoff.classList.remove("hide")
};

navoff.onclick=function(){
    nav.style.left =-100+"%";
    navoff.classList.add("hide")
}

