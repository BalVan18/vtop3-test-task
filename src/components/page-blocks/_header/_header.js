let menuBtn = document.querySelector('.btn__hamburger');
let header = document.querySelector('.header');
menuBtn.addEventListener('click', function()
{
	header.classList.toggle('active');
});