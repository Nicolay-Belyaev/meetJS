const cardHTMLGenerator = (person) => {
    const outerDiv = document.createElement("div");
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    const textDiv = document.createElement("div");

    const nameSpan = document.createElement("span");
    const speciesSpan = document.createElement("span");
    const statusSpan = document.createElement("span");

    outerDiv.className = "outer";
    imageDiv.className = "image";
    image.className = 'img'
    textDiv.className = "text";

    nameSpan.className = "name";
    speciesSpan.className = "species";
    person.status === "Alive" ?  statusSpan.className = "status__alive" :   statusSpan.className = "status__dead";

    image.src = person.image;
    nameSpan.innerText = person.name;
    speciesSpan.innerText = person.species;
    statusSpan.innerText = person.status;

    outerDiv.append(
        imageDiv, textDiv);
        imageDiv.append(
            image);
        textDiv.append(
            nameSpan, speciesSpan, statusSpan
        );

    return outerDiv;
}
