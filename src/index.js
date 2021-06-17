import {header, tabControls, footerContent} from "./Page Layout.js";
// general page layout
header.header();
tabControls.enableMain();
footerContent.footer();
// logic for tab content
const clickedTab = (function() {
    
            // grab tabs
            const home = document.querySelector('.home');
            const menu = document.querySelector('.menu');
            const contact = document.querySelector('.contact');
            // targets home tab on page load
            window.addEventListener('load', _defaultTab);
            
            // private function for making home the default tab
            function _defaultTab() {
                home.classList.add('choiceButton');
            }

            // run logic when a tab is clicked
            home.addEventListener('click', tabSelect);
            menu.addEventListener('click', tabSelect);
            contact.addEventListener('click', tabSelect);
                 
        // adds bottom border to clicked tab
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

    // private function that prints content for each tab
    function _tabCreate(tab) {

        // var used to grab current tab
        const underlined = document.querySelector('.choiceButton');
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


