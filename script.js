// ________[Preloader]________
const textLoadingList = [
    "Sip your coffee, brew your dreams.",
    "Ignite creativity, one pixel at a time.",
    "Crafting concepts over coffee.",
    "Awaiting the surge of a creative blend.",
    "Brewing brilliance, just a heartbeat away.",
    "Savor the creative process, ideas are on the rise.",
    "In the realm of pixels and caffeine, magic is brewing.",
    "Coffee: checked. Creativity: loading.",
    "Infusing innovation into your screen.",
    "Pouring ideas into the cauldron of creation."
];

let updateTextInterval;
let isPreloaderVisible = true;

function updateTextLoading() {
    if (!isPreloaderVisible) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * textLoadingList.length);
    const newText = textLoadingList[randomIndex];
    const preTitleElement = document.querySelector('.pre-title');
    const preTextElement = document.querySelector('.pre-text');
    
    setTimeout(() => {
        preTitleElement.innerHTML = 'Loading.'
        setTimeout(() => {
            preTitleElement.innerHTML = 'Loading..'
            setTimeout(() => {
                preTitleElement.innerHTML = 'Loading...'
            }, 1000);
        }, 700);
    }, 1);
    
    preTextElement.style.opacity = "0";
    setTimeout(() => {
        preTextElement.innerHTML = `${newText}`;
        preTextElement.style.opacity = "1";
    }, 500);
}

function hidePreloader() {
    isPreloaderVisible = false;
    clearInterval(updateTextInterval);

    const preloaderElement = document.querySelector(".preloader");
    preloaderElement.style.opacity = "0";

    setTimeout(() => {
        preloaderElement.style.display = "none";
    }, 2000);
}

updateTextLoading()
updateTextInterval = setInterval(updateTextLoading, 3000);
window.addEventListener("load", () => {
    setTimeout(hidePreloader, 8000);
});


// ________[Section Handle]________
// Projects Button
function swipeToRight() {
	const projectsContainer = document.querySelector('#projects');
	projectsContainer.style.left = '0';
}
document.querySelector('a[href="#projects"]').addEventListener('click', () => {
	document.querySelector('.about').style.transition = 'all 2s ease'
	document.querySelector('.about').style.transform = 'translateX(2000px)'
	setTimeout(() => {
		document.querySelector('#projects').style.display = 'block'
	}, 2000);
})


// ________[idk]________
const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  	addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list-sm')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)
