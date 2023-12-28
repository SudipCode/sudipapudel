let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

var typed = new Typed('.typing-text', {
    strings : ['front end developer', 'SubEngineer', 'Web designer', 'graphic designer', 'web developer' , 'PROGMMER '],
    loop : true,
    typeSpeed : 30
});

VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:30
});

window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
  
    fadeOut();
  
  }
  
function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut(){
    setTimeout(loader, 4000);
  }
  