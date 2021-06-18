import {header, tabControls, footerContent} from "./Page Layout.js";

// establishes page layout
header.header();
tabControls.enableHome();
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
                _tabCreate('Menu');
                home.classList.remove('choiceButton');
                contact.classList.remove('choiceButton');
                this.classList.add('choiceButton');
            break;
            case this.textContent === 'Contact Us':
                _tabCreate("Contact Us");
                home.classList.remove('choiceButton');
                menu.classList.remove('choiceButton');
                this.classList.add('choiceButton');
            break;
            case this.textContent === 'Home':
                _tabCreate("Home");
                menu.classList.remove('choiceButton');
                contact.classList.remove('choiceButton');    
                this.classList.add('choiceButton');
            break;
        }
    }

    // private function that displays content for current tab
    function _tabCreate(tab) {

        // variable used to stop spammed tab selection
        const tabHighlight = document.querySelector('.choiceButton');

        switch(true) {
            case tab === "Menu":
                if (tabHighlight.textContent === "Menu") {
                } else {
                    tabControls.disableHome();
                    tabControls.enableMenu();
                }
            break;
            case tab === "Contact Us":
                if (tabHighlight.textContent === "Contact Us") {
                } else {
                    console.log(tab);                    
                }   
            break;
            case tab === "Home":
                if (tabHighlight.textContent === "Home") {

                } else {
                    tabControls.disableMenu();
                    tabControls.enableHome();
                } 
            break;
        }

        
    }

    return {
        select: tabSelect
    }

})();


