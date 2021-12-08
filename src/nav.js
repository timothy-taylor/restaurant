const nav = () => {
    const element = document.createElement('NAV');
    const ul = document.createElement('UL');
    const links = ['Home', 'Menu', 'Contact us', 'Reviews'];
    links.forEach( link => {
        const li = document.createElement('LI');
        const a = document.createElement('A');
        a.innerHTML = link;
        a.href = "";
        li.appendChild(a);
        ul.appendChild(li);
    });

    element.appendChild(ul);
    return element;
}

export default nav;
