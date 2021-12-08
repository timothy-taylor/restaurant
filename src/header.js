const header = () => {
    const element = document.createElement('HEADER');
    const title = document.createElement('H1');
    title.innerHTML = "River Valley Pizza";
    const subtitle = document.createElement('H2');
    subtitle.innerHTML = "Connectict Style Pizza";
    
    element.appendChild(title);
    element.appendChild(subtitle);
    return element;
}

export default header;
