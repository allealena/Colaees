(function () {
	let menu = document.querySelector('.main-nav'),
	    childrenContainer,
	    activeItem;

    menu.addEventListener('click', function (event) {
    	if (event.target.tagName != 'LI') {
    		return;
    	}

    	childrenContainer = event.target.parentNode.querySelector('ul');
    	activeItem = event.target;
    	if (!childrenContainer) return;

    	childrenContainer.classList.toggle('open');
    	activeItem.classList.toggle('active');
    })
})();