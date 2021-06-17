import {header, tabControls, footerContent} from "./Page Layout.js";

// establishes page layout
header.header();
tabControls.enableMain();
footerContent.footer();

// logic for tabbed browsing
const clickedTab = (function() {
    
            // variables for grabbing each tab
            const home = document.querySelector('.home');
            const menu = document.querySelector('.menu');
            const contact = document.querySelector('.contact');

            // event listener that targets home tab on page load
            window.addEventListener('load', _defaultTab);
            
            // private function for making home the default tab
            function _defaultTab() {
                home.classList.add('choiceButton');
            }

            // event listeners for each tab
            home.addEventListener('click', tabSelect);
            menu.addEventListener('click', tabSelect);
            contact.addEventListener('click', tabSelect);
                 
    // adds a bottom border to highlight current tab
    function tabSelect() {

        switch(true) {
            case this.textContent === 'Menu':
                home.classList.remove('choiceButton');
                contact.classList.remove('choiceButton');
                this.classList.add('choiceButton');
                _tabCreate('Menu');
            break;
            case this.textContent === 'Contact Us':
                home.classList.remove('choiceButton');
                menu.classList.remove('choiceButton');
                this.classList.add('choiceButton');
                _tabCreate("Contact Us");
            break;
            case this.textContent === 'Home':
                menu.classList.remove('choiceButton');
                contact.classList.remove('choiceButton');    
                this.classList.add('choiceButton');
                _tabCreate("Home");
            break;
        }
    }

    // private function that displays content for current tab
    function _tabCreate(tab) {

        switch(true) {
            case tab === "Menu":
                tabControls.enableMenu();
                tabControls.disableMain();
            break;
            case tab === "Contact Us":
                console.log(tab);
            break;
            case tab === "Home":
                tabControls.disableMenu();
                tabControls.enableMain();
            break;
        }

        
    }

    return {
        select: tabSelect
    }

})();


