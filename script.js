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


// ________[Button mode Handler]_______
function msgBox(title, msg) {
	const ele = document.querySelector('.modal')
	ele.style.opacity = '1'
	const format = `
		<div>
			<h1>${title}</h1>
			<p>${msg}</p>
		</div>
	`
	ele.innerHTML = format
	ele.style.width = '384px'
	setTimeout(() => {
		ele.style.opacity = '0'
	}, 5000);
}

document.querySelector('#resume').addEventListener('click', () => {
	msgBox('Sorry', 'My Resume lost 2 week ago:(')
})


// ________[Button mode Handler]_______
let isParallaxMode = false

document.querySelector('.mode').addEventListener('click', () => {
	const bugElement = document.querySelector('.bug');
	const virusElement = document.querySelector('.virus');

	if (bugElement.style.display === 'none') {
		noScrollMode()
		bugElement.style.display = 'block';
		virusElement.style.display = 'none';
		isParallaxMode = false
	} else {
		bugElement.style.display = 'none';
		virusElement.style.display = 'block';
		isParallaxMode = true
	}
	console.log(isParallaxMode);
});


// ________[Button per-Section Handler]________
const swipeTo = (selector, from, to) => {
	const ele = document.querySelector(selector)

	if (ele) {
		ele.style.transform = `${from}`
		ele.style.transition = `transform 1s ease-in-out`
		setTimeout(() => {
			ele.style.transform = `${to}`
		}, 100);
	}
}

function setActiveNavLink(event) {
	const activeLink = document.querySelector('.link--nav.active');
	if (activeLink) {
		activeLink.classList.remove('active');
	}
	event.currentTarget.classList.add('active');
}

noScrollMode()
function noScrollMode() {
	if (isParallaxMode === true) {
		return
	} else {
		const secList = ['.about', '#projects', '#Internship', '#skills', '.footer']

		document.querySelector('a[href="#about"]').addEventListener('click', (event) => {
			const aboutSec = document.querySelector('.about');

			setActiveNavLink(event)
			swipeTo('.activeSection', `translate(0, 0)`, `translate(0, 1200px)`)
			document.querySelector('.activeSection').classList.remove('activeSection')
			setTimeout(() => {
				let sec = secList.slice(0, 0).concat(secList.slice(1))
				sec.forEach((selector) => {
					const element = document.querySelector(`${selector}`);
					if (element) {
						element.style.display = 'none';
					}
				});
				aboutSec.style.display = 'flex'
				aboutSec.classList.add('activeSection')
				swipeTo('.about', `translate(0, -1200px)`, `translate(0, 0)`)
			}, 700);
		});

		document.querySelector('a[href="#projects"]').addEventListener('click', (event) => {
			const projectsSec = document.querySelector('#projects');

			setActiveNavLink(event)
			swipeTo('.activeSection', `translate(0, 0)`, `translate(1300px, -1200px)`)
			document.querySelector('.activeSection').classList.remove('activeSection')
			setTimeout(() => {
				let sec = secList.slice(0, 1).concat(secList.slice(2))
				sec.forEach((selector) => {
					const element = document.querySelector(`${selector}`);
					if (element) {
						element.style.display = 'none';
					}
				});
				projectsSec.style.display = 'block'
				projectsSec.classList.add('activeSection')
				swipeTo('#projects', `translate(-1300px, 1200px)`, `translate(0, 0)`)
			}, 700);
		});

		document.querySelector('a[href="#Internship"]').addEventListener('click', (event) => {
			const internshipSec = document.querySelector('#Internship');

			setActiveNavLink(event)
			swipeTo('.activeSection', `translate(0, 0)`, `translate(-1300px, -1200px)`)
			document.querySelector('.activeSection').classList.remove('activeSection')
			setTimeout(() => {
				let sec = secList.slice(0, 2).concat(secList.slice(3))
				sec.forEach((selector) => {
					const element = document.querySelector(selector);
					if (element) {
						element.style.display = 'none';
					}
				});
				internshipSec.style.display = 'block'
				internshipSec.classList.add('activeSection')
				swipeTo('#Internship', `translate(1300px, 1200px)`, `translate(0, 0)`)
			}, 700);
		});

		document.querySelector('a[href="#skills"]').addEventListener('click', (event) => {
			const skillsSec = document.querySelector('#skills');

			setActiveNavLink(event)
			swipeTo('.activeSection', `translate(0, 0)`, `translate(0, -1200px)`)
			document.querySelector('.activeSection').classList.remove('activeSection')
			setTimeout(() => {
				let sec = secList.slice(0, 3).concat(secList.slice(4))
				sec.forEach((selector) => {
					const element = document.querySelector(selector);
					if (element) {
						element.style.display = 'none';
					}
				});
				skillsSec.style.display = 'block'
				skillsSec.classList.add('activeSection')
				swipeTo('#skills', `translate(0, 1200px)`, `translate(0, 0)`)
			}, 700);
		});
	}
}


// ________[Parallax per-Section Handle]________
parallaxMode()
function parallaxMode() {
	if (isParallaxMode) {
		document.addEventListener('scroll', () => {
			const scrollValue = window.scrollY;
			// console.log(scrollValue);

			if (scrollValue > 0) {
				const divider = scrollValue

				const aboutSec = document.querySelector('.about');

				aboutSec.style.transition = `all .3s ease`;
				if (1 - divider * 0.002 > 0) {
					aboutSec.style.transform = `translate3d(-${divider * 0.9}px, ${divider * 0.5}px, 0) scale(${1 - divider * 0.002})`
				}
				if (divider > 900) {
					aboutSec.style.opacity = '0'
				} else if (divider < 900) {
					aboutSec.style.opacity = '1'
				}
				// console.log(divider);
			}
		})
	}
}


// ________[Background handler]________
// const anBG = document.querySelector('.slick-word-bg')
// anBG.style.display = 'block'
// setTimeout(() => {
// 	anBG.style.transform = `translate(1400px, 900px)`
// 	anBG.style.transition = `transform 12s ease-in-out`
// 	setTimeout(() => {
// 		anBG.style.transform = `translate(0, 0) scale(0)`
// 		anBG.style.display = `none`
// 	}, 12000);
// }, 2000);


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

const toggleTheme = () => {
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

}
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
