const doggoConveyor = () => {
    let interval =  setInterval(getDoggo, 3000);
    setTimeout(() => {clearInterval(interval)}, 30000);
}

const getDoggo = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(result => result.json())
        .then(doggoMsg => {
            // иногда бэк успешно отдает ссылку на пёселя, но картинки по ссылке на бэке нету.
            // поэтому мы фетчим непосредственно линк картинки и если пёсель потерялся просим у бэка нового.
            fetch(`${doggoMsg.message}`)
                .then(() => doggoRender(doggoMsg.message))
                .catch(() => getDoggo())
        })
}

const doggoRender = (doggo) => {
    const main = document.querySelector(".main");
    const doggoImg = document.createElement("img");
    doggoImg.src = doggo;
    main.append(doggoImg);
}

doggoConveyor()
