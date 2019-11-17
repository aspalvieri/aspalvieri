//The entire purpose of this javascript file is to automatically create slideshows through very minimal HTML

export class Slideshow {
    constructor() {
        this.modal = document.querySelector("#modal");
        this.slideshows = [];
        document.querySelectorAll(".slideshow").forEach((slideshow) => {
            this.slideshows.push(new Slide(slideshow, buildSlideshow(slideshow.id)));
        });
        this.slideshows.forEach((slideshow) => {
            slideshow.slides.forEach((slide, i) => {
                let img = slide.querySelector("img");
                img.src = `assets/home/${slideshow.self.id}/${i+1}.png`;
                let elem = document.createElement("button");
                elem.classList = "slidebutton";
                elem.textContent = " ";
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
            slide.slides[i].style.display = "inline-block";
            slide.self.querySelector(`button[data-index="${i}"]`).classList.add("button-active");
        }
        else {
            slide.slides[i].style.display = "none";
            slide.self.querySelector(`button[data-index="${i}"]`).classList.remove("button-active");
        }
    }
}

/*

function buildSlideshow(id) {
    var sl = [];
    //Loops through each div inside the ID and store into array
    $("#"+id+" div").each(function(){
        sl.push($(this));
    });
    //Create new Slide class with the ID and slides
    slideshows.push(new Slide(id, sl));
}

//Function for previous/next slide buttons
function nextSlide(slide, inc) {
    //Sets all slides to display none
    for (var i = 0; i < slide.slides.length; i++) {
        slide.slides[i].css({"display":"none"});
    }
    //increase index
    slide.ind += inc;
    if (slide.ind >= slide.slides.length) {
        slide.ind = 0;
    }
    if (slide.ind < 0) {
        slide.ind = slide.slides.length - 1;
    }
    //set indexed slide to display inline
    slide.slides[slide.ind].css({"display":"inline"});
    slide.updateText();
}
*/
