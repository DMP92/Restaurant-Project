import {header, tabControls, footerContent} from "./Page Layout.js";

// establishes page layout
header.header();
tabControls.enableHome();
footerContent.footer();


// logic for tabbed browsing
const clickedTab = (function() {
    
            // array that tracks the last two clicked tabs
            const tabArray = [];

            // variables for grabbing each tab
            const home = document.querySelector('.home');
            const menu = document.querySelector('.menu');
            const contact = document.querySelector('.contact');

            // event listener that targets home tab on page load
            window.addEventListener('load', _defaultTab);
            
            // private function for making home the default tab
            function _defaultTab() {
                home.classList.add('choiceButton');
                tabArray.push('Home');
            }

            // event listeners for each tab
            home.addEventListener('click', tabSelect);
            menu.addEventListener('click', tabSelect);
            contact.addEventListener('click', tabSelect);
                 
    // adds a bottom border to highlight current tab
    function tabSelect() {

        switch(true) {
            case this.textContent === 'Menu':
                tabArray.push('Menu');
                _tabCreate('Menu');
                home.classList.remove('choiceButton');
                contact.classList.remove('choiceButton');
                this.classList.add('choiceButton');
            break;
            case this.textContent === 'Contact Us':
                tabArray.push('Contact Us');
                _tabCreate("Contact Us");
                home.classList.remove('choiceButton');
                menu.classList.remove('choiceButton');
                this.classList.add('choiceButton');
            break;
            case this.textContent === 'Home':
                tabArray.push('Home');
                _tabCreate("Home");
                menu.classList.remove('choiceButton');
                contact.classList.remove('choiceButton');    
                this.classList.add('choiceButton');
            break;
        }

        // conditional that keeps only the last two clicked tabs in an array for use in the _tabCreate function
        if (tabArray.length == 2) {
            tabArray.shift();
        }

    }

    // private function that displays content for current tab
    function _tabCreate(tab) {

        // variable used to stop spammed tab selection
        const tabHighlight = document.querySelector('.choiceButton');

        switch(true) {
            case tab === "Menu":
                // conditional that ensures user cannot spam the tab
                if (tabHighlight.textContent === "Menu") {
                } else {
                    // switch statement ensuring that functions for removing
                    // DOM elements will not conflict with one another
                    switch(true) {
                        case tabArray[0] === "Home":
                            tabControls.disableHome();
                            tabControls.enableMenu();
                        break;
                        case tabArray[0] === "Contact Us":
                            tabControls.disableContact();
                            tabControls.enableMenu();  
                        break;
                    }
                }
            break;
            case tab === "Contact Us":
                // conditional that ensures user cannot spam the tab
                if (tabHighlight.textContent === "Contact Us") {
                } else {
                    // switch statement ensuring that functions for removing
                    // DOM elements will not conflict with one another
                    switch(true) {
                        case tabArray[0] === "Home":
                            tabControls.disableHome();
                            tabControls.enableContact();
                        break;
                        case tabArray[0] === "Menu":
                            tabControls.disableMenu();
                            tabControls.enableContact();  
                        break;
                    }
                }   
            break;
            case tab === "Home":
                // conditional that ensures user cannot spam the tab
                if (tabHighlight.textContent === "Home") {

                } else {
                    switch(true) {
                        case tabArray[0] === "Contact Us":
                            tabControls.disableContact();
                            tabControls.enableHome();
                        break;
                        case tabArray[0] === "Menu":
                            tabControls.disableMenu();
                            tabControls.enableHome();  
                        break;
                    }
                } 
            break;
        }

        
    }

    return {
        select: tabSelect
    }

})();


