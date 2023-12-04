const catalogGenerator = (data) => {
    const container = document.querySelector(".container");
    data.results.forEach((person) => container.append(cardHTMLGenerator(person)));
}
