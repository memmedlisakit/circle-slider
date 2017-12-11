var prev = document.querySelector("#prev") 
var next = document.querySelector("#next") 
var items = document.body.querySelectorAll(".bgSlider .div-contain div");



next.addEventListener("click", function(){
	for(var i=0; i<items.length; i++){		
		if(i == items.length-1){
			items[i].style.bottom = getComputedStyle(items[0]).bottom;
			items[i].style.left = getComputedStyle(items[0]).left;
			items[i].style.zIndex = getComputedStyle(items[0]).zIndex;
		}else{
			items[i].style.bottom = getComputedStyle(items[i].nextElementSibling).bottom;
			items[i].style.left = getComputedStyle(items[i].nextElementSibling).left;
			items[i].style.zIndex = getComputedStyle(items[i].nextElementSibling).zIndex;
		}
	}
})

prev.addEventListener("click", function(){
	for(var i = 0; i < items.length; i++){	
		if(i == 0){
			items[i].style.bottom = getComputedStyle(items[items.length-1]).bottom;
			items[i].style.left = getComputedStyle(items[items.length-1]).left;
			items[i].style.zIndex = getComputedStyle(items[items.length-1]).zIndex;
		}else{
			items[i].style.bottom = getComputedStyle(items[i].previousElementSibling).bottom;
			items[i].style.left = getComputedStyle(items[i].previousElementSibling).left;
			items[i].style.zIndex = getComputedStyle(items[i].previousElementSibling).zIndex;
		}
	}
})