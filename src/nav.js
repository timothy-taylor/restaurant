const nav = () => {
    const element = document.createElement('NAV');
    const ul = document.createElement('UL');
    const links = ['Home', 'Menu', 'Contact', 'Reviews'];
    links.forEach( link => {
        const li = document.createElement('LI');
        const btn = document.createElement('BUTTON');
        const text = document.createTextNode(link);
        btn.appendChild(text);
        btn.id = link.toLowerCase();
        li.appendChild(btn);
        ul.appendChild(li);
    });

    element.appendChild(ul);
    return element;
}

export default nav;
