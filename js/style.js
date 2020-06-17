// $(".open-menu").click(function() {
// 	$(this).toggleClass("active");
// 	$(".popup-overlay").toggleClass("open");
// 	// this line ▼ prevents content scroll-behind
// 	$("body").toggleClass("locked"); 
// });

const openMenu = document.querySelector('.open-menu'),
  popupOverlay = document.querySelector('.popup-overlay'),
  body = document.body;

openMenu.classList.add('open-popup-btn');

const link = document.querySelectorAll('.popup-menu__link');
 for (let i=0; i < link.length; i++) {
  link[i].classList.add('link');
 }

window.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('open-popup-btn')) {
    openMenu.classList.add('active');
    popupOverlay.classList.add('open');
    body.classList.add('locked');
    openMenu.classList.remove('open-popup-btn')
    openMenu.classList.add('close-popup-btn')
  } else if (target.classList.contains('close-popup-btn')) {
    openMenu.classList.remove('active');
    popupOverlay.classList.remove('open')
    body.classList.remove('locked');
    openMenu.classList.add('open-popup-btn')
    openMenu.classList.remove('close-popup-btn')
  } else if (target.classList.contains('link')) {
    openMenu.classList.remove('active');
    popupOverlay.classList.remove('open')
    body.classList.remove('locked');
    openMenu.classList.add('open-popup-btn')
    openMenu.classList.remove('close-popup-btn')
  }
})