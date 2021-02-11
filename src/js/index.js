// Cross-browser compatibility:
/**
  NodeList.prototype.forEach() polyfill
  https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
*/
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}


// Select-city:
const selectSingle = document.querySelector('.select');
const selectSingleTitle = selectSingle.querySelector('.select__title');
const selectSingleLabels = selectSingle.querySelectorAll('.select__label');

// Toggle menu (select-city):
selectSingleTitle.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    selectSingleLabels.forEach((item) => {
      item.classList.add('hidden-2')
    });
  } else {
    selectSingleLabels.forEach((item) => {
      item.classList.remove('hidden-2')
    });
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option:
for (let i = 0; i < selectSingleLabels.length; i++) {
  selectSingleLabels[i].addEventListener('click', (event) => {
    selectSingleTitle.textContent = event.target.textContent;
    selectSingle.setAttribute('data-state', '');
    selectSingleLabels.forEach((item) => {
      item.classList.add('hidden-2')
    });
  });
}


// Nav-item-list(показать или скрыть список):
const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(function(item) {
  item.addEventListener('mouseover', function() {
      let navContainer = this.querySelector('.nav-container');
      navContainer.classList.remove('hidden');;
  })
  item.addEventListener('mouseout', function() {
    let navContainer = this.querySelector('.nav-container');
    navContainer.classList.add('hidden');;
  })
})
navItem.forEach(function(item) {
  item.addEventListener('click', function() {
      let navContainer = this.querySelector('.nav-container');
      navContainer.classList.toggle('hidden');
  })

})


// Button "Свяжитесь с нами":
const btnContact = document.querySelector('#btn-contact');
const contactList = document.querySelectorAll('.half');

const widthWindow = document.body.clientWidth;

if (widthWindow <= 768) {
  contactList[1].classList.add('hidden');
}

btnContact.addEventListener('click', () => {
  contactList[1].classList.toggle('hidden');
})


// Catalog:
const catalog = document.querySelector('#catalog');
const catalogList = document.querySelector('.nav');

if (widthWindow <= 768) {
  catalogList.classList.add('hidden');
}

catalog.addEventListener('click', () => {
  catalogList.classList.toggle('hidden');
})


// Login(width < 425px):
const login = document.querySelector('#login').children[0];
if (widthWindow <= 425) {
  login.innerHTML = '';
}


// Basket(width < 425px):
const btnBasket = document.querySelector('#basket').children[0];
if (widthWindow <= 425) {
  btnBasket.innerHTML = '';
}


// Toggle(width < 425px):
const toggle = document.querySelector('#toggle');
const headerInfo = document.querySelector('.header-info');

if (widthWindow <= 425) {
  headerInfo.classList.add('hidden');
}

toggle.addEventListener('click', () => {
  headerInfo.classList.toggle('hidden');
  catalogList.classList.add('hidden');
  contactList[1].classList.add('hidden');
})