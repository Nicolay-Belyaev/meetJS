const createMiniature = (id, imgSrc) => {
    const miniature = document.createElement("div");
    const img = document.createElement("img")
    miniature.className = "miniature";
    img.src = imgSrc;
    miniature.append(img);
    return miniature;
}

export const miniaturesRenderer = () => {
    const history = JSON.parse(localStorage.getItem("picHistory"));
    const gallery = document.createElement("section");
    gallery.className = "gallery";
    history.forEach(pic => {
        console.log(pic)})
    history.forEach(pic => {
        gallery.append(createMiniature(pic.id, pic.urls.small))
        console.log(pic.urls.small)
    });

    return gallery;
}
