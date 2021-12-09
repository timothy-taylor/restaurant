import load_home from './home';
import main from './main';
import menu from './menu';
import contact from './contact';
import reviews from './reviews';
import './style.css';

load_home();
const content = document.getElementById('content');
content.appendChild(main());

const clear = (p) => {
    p.firstChild.remove();
};

const homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
    clear(content);    
    content.appendChild(main());
};

const menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
    clear(content);
    content.appendChild(menu());
};

const contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
    clear(content);
    content.appendChild(contact());
};

const reviewsBtn = document.getElementById('reviews');
reviewsBtn.onclick = () => {
    clear(content);
    content.appendChild(reviews());
};
