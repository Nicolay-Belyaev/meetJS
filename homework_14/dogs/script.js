const doggoConveyor = () => {
    let interval =  setInterval(getDoggo, 3000);
    setTimeout(() => {clearInterval(interval)}, 30000);
}

const getDoggo = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .catch(() => getDoggo())
        .then(result => result.json())
        .then(doggoMsg => doggoRender(doggoMsg.message))
}

const doggoRender = (doggo) => {
    const main = document.querySelector(".main");
    const doggoImg = document.createElement("img");
    doggoImg.src = doggo;
    main.append(doggoImg);
}


doggoConveyor()
