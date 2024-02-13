import {fetchPhotos, rePaintDots, unpackPhotoLinks} from "./utils.js";
import {Slider} from "./slider.js";

const sliderData = new Slider(unpackPhotoLinks(await fetchPhotos(3)));

const sliderHTML = (slider) => {
    const wrapper = document.createElement("div");
    const controls = document.createElement("div");
    const previousButton = document.createElement("i");
    const nextButton = document.createElement("i");
    const img = document.createElement("img");
    const dots = [];

    img.src = slider.getCurrentImage();

    for (let i = 0; i < slider.dataLength; i++) {
        const dot = document.createElement("i");
        dot.className = "fa-solid fa-circle";
        dot.dataset.id = `${slider.dataLength - (i+1)}`;
        if (dot.dataset.id == slider.currentIndex) {dot.classList.add("green")}

        dot.addEventListener("click", () => {
            slider.setCurrentIndex(dot.dataset.id);
            img.src = slider.getCurrentImage();
            for (let dot of dots) {
                if (dot.classList.contains("green")) {
                    dot.classList.remove("green");
                    break;
                }
            }
            dot.classList.add("green");
        })
        dots.push(dot);
    }


    previousButton.className = "fa-solid fa-chevron-left";
    nextButton.className = "fa-solid fa-chevron-right";

    nextButton.addEventListener("click", () => {
        img.src = slider.next();
        rePaintDots(dots, slider);
    })
    previousButton.addEventListener("click", () => {
        img.src = slider.previous();
        rePaintDots(dots, slider);
    })

    wrapper.append(img, controls);
    controls.append(previousButton, nextButton);
    dots.forEach(dot => previousButton.after(dot));

    return wrapper;
}


document.body.append(sliderHTML(sliderData));
