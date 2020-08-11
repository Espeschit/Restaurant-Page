import { home } from './home';
import { contact } from './contact';
import { menu } from './menu';

const homePage = document.getElementById('homeAnchor');
const menuPage = document.getElementById('menuAnchor');
const contactPage = document.getElementById('contactAnchor');
 
const container = document.getElementById('content');

container.appendChild(home());

homePage.style.pointerEvents="none";
homePage.style.cursor="default";
homePage.style.borderBottom="2px solid #8d6262";


homePage.addEventListener('click', function() {
    container.appendChild(home());

    this.style.pointerEvents="none";
    this.style.cursor="default";
    this.style.borderBottom="2px solid #8d6262";

    menuPage.style.pointerEvents="auto";
    menuPage.style.cursor="pointer";
    menuPage.style.borderBottom="none";

    contactPage.style.pointerEvents="auto";
    contactPage.style.cursor="pointer";
    contactPage.style.borderBottom="none";

    document.querySelectorAll('.contactPage').forEach(function(page){
        page.remove()
    })

    document.querySelectorAll('.menuPage').forEach(function(page){
        page.remove()
    })
})

menuPage.addEventListener('click', function() {
    container.appendChild(menu());

    this.style.pointerEvents="none";
    this.style.cursor="default";
    this.style.borderBottom="2px solid #8d6262";

    homePage.style.pointerEvents="auto";
    homePage.style.cursor="pointer";
    homePage.style.borderBottom="none";

    contactPage.style.pointerEvents="auto";
    contactPage.style.cursor="pointer";
    contactPage.style.borderBottom="none";

    document.querySelectorAll('.contactPage').forEach(function(page){
        page.remove()
    })

    document.querySelectorAll('.homePage').forEach(function(page){
        page.remove()
    })
})

contactPage.addEventListener('click', function() {
    container.appendChild(contact());

    this.style.pointerEvents="none";
    this.style.cursor="default";
    this.style.borderBottom="2px solid #8d6262";

    menuPage.style.pointerEvents="auto";
    menuPage.style.cursor="pointer";
    menuPage.style.borderBottom="none";

    homePage.style.pointerEvents="auto";
    homePage.style.cursor="pointer";
    homePage.style.borderBottom="none";

    document.querySelectorAll('.homePage').forEach(function(page){
        page.remove()
    })

    document.querySelectorAll('.menuPage').forEach(function(page){
        page.remove()
    })
})
