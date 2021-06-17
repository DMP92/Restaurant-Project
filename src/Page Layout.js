import { menuTab } from "./Menu.js";

// creates header
const header = (function() {

        // grab content div
        const content = document.getElementById('content');
        // creates components of header grid div
        const headerGrid = document.createElement('div');
                headerGrid.classList.add('header');
        const title = document.createElement('h1');
                title.classList.add('title');
        // tab grid div
        const tabGrid = document.createElement('div');
                tabGrid.classList.add('buttonGrid');
        const homeTab = document.createElement('button');
                homeTab.classList.add('home');
        const menuTab = document.createElement('button');
                menuTab.classList.add('menu');
        const contactTab = document.createElement('button');
                contactTab.classList.add('contact');

    // function for header creation
    function createHeader() {
        content.appendChild(headerGrid);

        title.textContent = 'Restaurant';
        homeTab.textContent = 'Home';
        menuTab.textContent = 'Menu';
        contactTab.textContent = "Contact Us";

        headerGrid.appendChild(title);
        headerGrid.appendChild(tabGrid);
        tabGrid.appendChild(homeTab);
        tabGrid.appendChild(menuTab);
        tabGrid.appendChild(contactTab);

    }

    return {
        header: createHeader
    }

})();


// controls tab functionality
const tabControls = (function() {

        // grabs content div & creates each tab
        const content = document.getElementById('content');
        const main = document.createElement('div');
        
            
    function mainTab() {
        content.appendChild(main);
        main.classList.add('mainTab');
        footerContent.footer();
    }

    function disableMain() {
        content.removeChild(main);
        main.classList.remove('mainTab');
    };

    function enableMenu() {
        menuTab.create();
        footerContent.footer();
        
    }

    function disableMenu() {
        menuTab.disable();
    }

    return {
    enableMain: mainTab,
    disableMain: disableMain,
    enableMenu: enableMenu,
    disableMenu: disableMenu
    }

})();

// creates footer
const footerContent = (function() {
    
        // grab content div
        const content = document.getElementById('content');
        // create footer div
        const footer = document.createElement('div');
                footer.classList.add('footer');
        const h3 = document.createElement('h3');
                h3.classList.add('outro');

    // function creating footer
    function createFooter() {

        // append footer to page
        content.appendChild(footer);
        
        h3.textContent = "Name";
        footer.appendChild(h3);
    }

    return {
        footer: createFooter
    }

})()




export { header, tabControls, footerContent };