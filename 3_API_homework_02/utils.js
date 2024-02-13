const url = "https://api.unsplash.com";
const APIkey = "OdudFgs7KAS-VaDAWri16MxDiBhxKOhEPrY8khnyZSM";

export const fetchPhotos = async (photosAmount) => {
    return ((await fetch(`${url}/photos?per_page=${photosAmount}`, {
        method: "GET",
        headers: {
            authorization: `Client-ID ${APIkey}`
        }
    })).json())
}

export const unpackPhotoLinks = (photosData) => {
    return photosData.map(photoObj => photoObj.urls.small);
}

export const rePaintDots = (dots, slider) => {
    for (let dot of dots) {
        if (dot.classList.contains("green")) {
            dot.classList.remove("green");
        }
        if (dot.dataset.id == slider.currentIndex) {
            dot.classList.add("green")
        }
    }
}
