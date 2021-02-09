// Select-city:
const selectSingle = document.querySelector('.select');
const selectSingleTitle = selectSingle.querySelector('.select__title');
const selectSingleLabels = selectSingle.querySelectorAll('.select__label');

// Toggle menu:
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