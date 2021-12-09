const header = () => {
    const element = document.createElement('HEADER');
    const title = document.createElement('H1');
    title.innerHTML = "Maplewood Pizza";
    const subtitle = document.createElement('H2');
    subtitle.innerHTML = "East-coast inspired, wood-fired pizza";
    
    element.appendChild(title);
    element.appendChild(subtitle);
    return element;
}

export default header;
