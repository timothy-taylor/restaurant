import header from './header';
import nav from './nav';
import main from './main';
import footer from './footer';

const home = () => {
    document.body.appendChild(header());
    document.body.appendChild(nav());
    document.body.appendChild(main());
    document.body.appendChild(footer());
}

export default home;
