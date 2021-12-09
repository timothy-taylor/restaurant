import header from './header';
import nav from './nav';
import footer from './footer';

const home = () => {
    const container = document.getElementById('container');
    const content = document.createElement('MAIN');
    content.id = 'content';

    container.appendChild(nav());
    container.appendChild(header());
    container.appendChild(content);
    container.appendChild(footer());
}

export default home;
