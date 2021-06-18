import  {menuTab}  from "./Menu.js";
import  {homeTab}  from "./Home.js";

// **** Page Layout.js is a file that does two things:

//      1. Creates the grid that contains:
//              - the header
//              - the home content area
//              - the footer

//      2. It gathers the content created by each tab ('Home', 'Menu' and 'Contact Us') and then
//         exports everything in a module to 'index.js' where it can all be neatly accessed through
//         the interface created in the tabControls revealing module pattern


// module for header creation
const header = (function() {

        // grab content div
        const content = document.getElementById('content');
        // creates components of header grid 
        const headerGrid = document.createElement('div');
                headerGrid.classList.add('header');
        const title = document.createElement('h1');
                title.classList.add('title');
                
        // variables for each tab in tab-selection-grid
        const tabGrid = document.createElement('div');
                tabGrid.classList.add('buttonGrid');
        const homeTab = document.createElement('button');
                homeTab.classList.add('home');
        const menuTab = document.createElement('button');
                menuTab.classList.add('menu');
        const contactTab = document.createElement('button');
                contactTab.classList.add('contact');

    // function that constructs header
    function createHeader() {
        content.appendChild(headerGrid);

        title.textContent = 'Fructece';
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


// module that gathers logic from each exported module and forms a main control interface
// that is then used in the 'index.js' file to allow for tabbed browsing
const tabControls = (function() {

        // grabs content div & creates each tab
        const content = document.getElementById('content');
        const home = document.createElement('div');
        
            
    function enableHome() {
        // content.appendChild(home);
        // home.classList.add('homeTab');
        // footerContent.footer();
        homeTab.homeCreate();
        footerContent.footer();

    }

    function disableHome() {
        // content.removeChild(home);
        // home.classList.remove('homeTab');
        homeTab.homeDisable();
    };

    function enableMenu() {
        menuTab.create();
        footerContent.footer();
        
    }

    function disableMenu() {
        menuTab.disable();
    }

    return {
    enableHome: enableHome,
    disableHome: disableHome,
    enableMenu: enableMenu,
    disableMenu: disableMenu
    }

})();

// module that creates footer
const footerContent = (function() {
    
        // grabs content div
        const content = document.getElementById('content');

        // create footer div
        const footer = document.createElement('div');
                footer.classList.add('footer');
        const h3 = document.createElement('h3');
                h3.classList.add('outro');

    // function that creates the footer
    function createFooter() {

        // append footer to page
        content.appendChild(footer);
        
        h3.textContent = "Footer of Website";
        footer.appendChild(h3);
    }

    return {
        footer: createFooter
    }

})()




export { header, tabControls, footerContent };