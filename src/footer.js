const footer = () => {
    const element = document.createElement('FOOTER');
    const hr = document.createElement('HR');
    const text = document.createElement('DIV');
    text.innerHTML = "2021 RVP";

    element.appendChild(hr);
    element.appendChild(text);
    return element;
}

export default footer;
