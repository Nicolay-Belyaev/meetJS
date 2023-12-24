const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {return response.json()})
        .then(json => catalogRender(json));
}

getData();


const renderCard = ({name, email, phone, address, website, company}) => {
    const wrapper = document.createElement("div");
    const nameSpan = document.createElement("span");
    const emailSpan = document.createElement("span");
    const phoneSpan = document.createElement("span");
    const addressSpan = document.createElement("span");
    const websiteSpan = document.createElement("span");
    const companySpan = document.createElement("span");
    const removeButton = document.createElement("button")

    wrapper.className = "card";

    nameSpan.innerText = `Name: ${name}`;
    emailSpan.innerText = `Email: ${email}`;
    phoneSpan.innerText = `Phone: ${phone}`;
    addressSpan.innerText = `City: ${address.city}`;
    websiteSpan.innerText = `Website: ${website}`;
    companySpan.innerText = `Company: ${company.name}`;
    removeButton.innerText = `Remove from list`;
    removeButton.addEventListener("click", ({currentTarget}) => {
        currentTarget.parentElement.remove();
    })

    wrapper.append(nameSpan, emailSpan, phoneSpan, addressSpan, websiteSpan, companySpan, removeButton);

    return wrapper;
}

const catalogRender = (data) => {
    const main = document.querySelector(".main");
    data.forEach(person => main.append(renderCard(person)));
}
