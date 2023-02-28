var openMenu = document.getElementById('open-btn');
var closeMenu = document.getElementById('close-btn');
var menu = document.getElementById('menu');
var overlay = document.getElementById('overlay-menu');

document.getElementById("open-btn").addEventListener("click", function(){
    openMenu.style.display = 'none';
    menu.style.transform ='translateX(0%)';
    closeMenu.style.display = 'block';
    overlay.style.display = 'block';
});
document.getElementById("close-btn").addEventListener("click", function(){
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    menu.style.transform ='translateX(100%)';
    overlay.style.display = 'none';
});

window.addEventListener('DOMContentLoaded', () => {
    const showMenu = () => { 
        menu.style.transform ='translateX(0%)';
        openMenu.style.display = 'none';
        closeMenu.style.display = 'none';
        overlay.style.display = 'none';
    }
    const disappearsMenu = () => { 
        menu.style.transform ='translateX(100%)';
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        overlay.style.display = 'none';
    }
    const windowsSize = window.matchMedia('(min-width: 600px)');
    
    windowsSize.addEventListener('change', (event) => {
        if (event.matches) return showMenu()
       
        disappearsMenu();
        
    });
  });