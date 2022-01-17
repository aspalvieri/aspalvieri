//The entire purpose of this javascript file is to automatically create slideshows through very minimal HTML

export default class Slideshow {
	constructor(folderPath) {
		this.modal = document.querySelector("#modal");
		this.slideshows = [];
		document.querySelectorAll(".slideshow").forEach((slideshow) => {
			this.slideshows.push(new Slide(slideshow, buildSlideshow(slideshow.id)));
		});
		this.slideshows.forEach((slideshow) => {
			slideshow.current = 0;
			//Create the previous button
			let prev = document.createElement("button");
			prev.classList = "slidebutton slidebutton-nav";
			prev.innerHTML = "<";
			prev.addEventListener("click", (e) => {
				e.preventDefault();
				slideshow.current = (slideshow.current - 1 >= 0 ? slideshow.current - 1 : slideshow.slides.length - 1);
				changeSlide(slideshow, slideshow.current);
			});
			slideshow.self.appendChild(prev);
			//For each slide in the slideshow, create a button to index to it
			slideshow.slides.forEach((slide, i) => {
				let img = slide.querySelector("img");
				img.src = `assets/${folderPath}/${slideshow.self.id}/${i+1}.png`;
				let elem = document.createElement("button");
				elem.classList = "slidebutton";
				elem.innerHTML = "&nbsp;";
				elem.dataset.index = i;
				if (i === 0) {
					elem.classList.add("button-active");
				}
				elem.addEventListener("click", (e) => {
					e.preventDefault();
					changeSlide(slideshow, i);
				});
				img.addEventListener("click", (e) => {
					e.preventDefault();
					this.modal.querySelector("img").src = img.src;
					this.modal.style.display = "block";
				});
				slideshow.self.appendChild(elem);
			});
			//Create the next button
			let next = document.createElement("button");
			next.classList = "slidebutton slidebutton-nav";
			next.innerHTML = ">";
			next.addEventListener("click", (e) => {
				e.preventDefault();
				slideshow.current = (slideshow.current + 1 < slideshow.slides.length ? slideshow.current + 1 : 0);
				changeSlide(slideshow, slideshow.current);
			});
			slideshow.self.appendChild(next);
		});
		this.modal.addEventListener("click", (e) => {
			e.preventDefault();
			this.modal.style.display = "none";
		});
	}
}

class Slide {
	//Constructor, sets the slideshow ID, slides array, reference to text, and binds buttons
	constructor(ptr, s) {
		this.self = ptr; //Pointer to the slideshow its part of
		this.ind = 0; //Current index of slide
		this.slides = s;
		this.slides[this.ind].style.display = "inline-block"; //Displays a slide, since they are 'display none' by default
		this.text = ptr.querySelector(`p`);
	}
}

function buildSlideshow(id) {
	let sl = [];
	//Loops through each div inside the ID and store into array
	document.querySelectorAll(`#${id} div`).forEach((slide) => {
		sl.push(slide);
	});
	//Create new Slide class with the ID and slides
	return sl;
}

function changeSlide(slide, index) {
	//Sets all slides to display none
	for (let i = 0; i < slide.slides.length; i++) {
		if (i === index) {
			slide.current = index;
			slide.slides[i].style.display = "inline-block";
			slide.self.querySelector(`button[data-index="${i}"]`).classList.add("button-active");
		}
		else {
			slide.slides[i].style.display = "none";
			slide.self.querySelector(`button[data-index="${i}"]`).classList.remove("button-active");
		}
	}
}