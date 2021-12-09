const footer = () => {
    const element = document.createElement('FOOTER');
    const text = document.createElement('DIV');
    text.innerHTML = "2021 Pizza";

    element.appendChild(text);
    return element;
}

export default footer;
