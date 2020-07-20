(function () {
    let sliderBox = document.getElementById("main-slider"),
        pages = document.querySelectorAll(".pagination .page"),
        pagination = document.querySelector(".pagination"),
        slideWidth = document.querySelector(".slide").offsetWidth,
        slideNow = 0;

    pagination.addEventListener("click", function (event) {
    	[].forEach.call(pages, function (page, index) {
            if (page.classList.contains("active")) {
            	page.classList.remove("active");
            }

            if (page == event.target) {
            	changeMarginLeft(index)
            }
    	})
    	event.target.classList.add("active");
    })

    function changeMarginLeft (index) {
       sliderBox.style.marginLeft = - index * slideWidth + "px";
   }
 
    function showSlide () {

    	if (slideNow != 0) {
    		pages[slideNow-1].classList.remove("active");
    	}

    	if (slideNow === pages.length) {
    		slideNow = 0;
    	}	
    	 
    	changeMarginLeft(slideNow);
    	pages[slideNow].classList.add("active");
    	slideNow++;
    }

    setInterval(showSlide, 3000);

})();