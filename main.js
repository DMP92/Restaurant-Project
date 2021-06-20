/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactUsTab": () => (/* binding */ contactUsTab)
/* harmony export */ });
// this module contains a revealing module pattern for the contact tab in this project

// logic for contact tab
const contactUsTab = (function() {

    // variable that grabs #content div
    const content = document.getElementById('content');

    // variables that create contact us tab
    const contactTab = document.createElement('div');
                contactTab.classList.add('contactTab');

    // variables for creating a map element
    const iframeContainer = document.createElement('div');
                iframeContainer.classList.add('iframeContainer');

    const iframe = document.createElement('div');
                iframe.classList.add('iframe');
                iframe.setAttribute("id", "gmap_canvas");
                
                // html for creating embedding the map
                iframe.innerHTML = `
                    <iframe 
                        src="https://maps.google.com/maps?width=520&height=400&hl=en&q=%20Seattle+()&t=&z=12&ie=UTF8&iwloc=B&output=embed" 
                        scrolling="no"
                        marginheight="0" 
                        marginwidth="0" 
                        id="gmap_canvas" 
                        height="100%"
                        width="100%"
                        frameborder="0">
                    </iframe> 
                    <a href='https://addmap.net/'>
                    </a> 
                    <script 
                        type='text/javascript' 
                        src='https://embedmaps.com/google-maps-authorization/script.js?id=c910574e6787e0e2131ec2fd427386046d8f2364'>
                    </script> `
                ;

    // right side of google map grid
    const iframeRight = document.createElement('div');
                iframeRight.classList.add('iframeRight')

    function createContactTab() {
        content.appendChild(contactTab);
        contactTab.appendChild(iframeContainer);
        iframeContainer.appendChild(iframe);
        iframeContainer.appendChild(iframeRight);
    }

    function disableContactTab() {
        content.removeChild(contactTab);
        contactTab.removeChild(iframeContainer);
        iframeContainer.removeChild(iframe);
        iframeContainer.removeChild(iframeRight);
    }

    return {
        create: createContactTab,
        disable: disableContactTab
    }
})();



/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeTab": () => (/* binding */ homeTab)
/* harmony export */ });
// Module for 'Home' tab content creation

const homeTab = (function() {

    // variable grabs content div
    const content = document.getElementById('content');

    // grabs the 'homeTab' div
    const homeTab = document.createElement('div');
            homeTab.classList.add('homeTab');
    // creates homeTabLogo div
    const homeTabLogo = document.createElement('div');
            homeTabLogo.classList.add('homeTabLogo');


    // creates homeTabTitle text
    const homeTabTitle = document.createElement('h2');
            homeTabTitle.classList.add('homeTabTitle');
            homeTabTitle.textContent = "Coolest froyo in town! title";

    // creates homeTabContent div
    const homeTabContent = document.createElement('div');
            homeTabContent.classList.add('homeTabContent');

    // creates homeTabIntro div
    const homeTabIntro = document.createElement('div');
            homeTabIntro.classList.add('homeTabIntro'); 

    // creates a heading for the homeTabIntro section
    const homeTabIntroHeader = document.createElement('h2');
            homeTabIntroHeader.classList.add('homeTabIntroHeader');
            homeTabIntroHeader.textContent = "Who we are";

    // creates text for the homeTabIntro section
    const homeTabIntroText = document.createElement('h2');
            homeTabIntroText.classList.add('homeTabIntroText');
            homeTabIntroText.textContent = "100% organic and GMO free. A family owned business since the summer 1855. We've been helping people beat the summer heat for nearly two centuries! We don't have a huge menu, but here at Fructece -- we believe in quality over quantity. We source our organic ingredients from all over the world. Whether it's our 'Belgium Chocolate Special' made with real Belgium chocolate, or our 'Classic Vanilla' made with the finest organic vanilla beans sourced from Papua New Guinea -- we take pride in our quality.";
            
    // creates text & a button for homeTabContent
    const hTCTitle = document.createElement('h2');
            hTCTitle.classList.add('hTCTitle');
            hTCTitle.textContent = "Fructece makes the coolest gift!";
    const hTCText = document.createElement('h3');
            hTCText.classList.add('hTCText');
            hTCText.textContent = "Treat the graduates in your life to their favorite flavors!";
    const hTCButton = document.createElement('button');
            hTCButton.classList.add('hTCButton');
            hTCButton.textContent = "Order online";

    // function that appends each element made above to to 'homeTab' div
    function homeTabCreate() {
        content.appendChild(homeTab);
        homeTab.appendChild(homeTabLogo);
        homeTab.appendChild(homeTabIntro);
        homeTabIntro.appendChild(homeTabIntroHeader);
        homeTabIntro.appendChild(homeTabIntroText);
        // homeTab.appendChild(homeTabTitle);
        homeTab.appendChild(homeTabContent);
        homeTabContent.appendChild(hTCTitle);
        homeTabContent.appendChild(hTCText);
        homeTabContent.appendChild(hTCButton);
    }

    function homeTabDisable() {
        content.removeChild(homeTab);
        homeTab.removeChild(homeTabLogo);
        // homeTab.removeChild(homeTabTitle);
        homeTab.removeChild(homeTabContent);
        homeTab.removeChild(homeTabIntro);
    }

    return {
        homeCreate: homeTabCreate,
        homeDisable: homeTabDisable
    }

})();



// notes
/* 
Switch the gift card section with the Intro section
make the Intro section a proper about us section

build the contact us logic

then once everything is finished, get it to be responsive -- something you should've been doing already
but stuff happens.
*/

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTab": () => (/* binding */ menuTab)
/* harmony export */ });
// module for menu content 

const menuTab = (function() {

        // grabs content div
        const content = document.getElementById('content');
    
    // creates elements for menu tab
    
    // menu item 1
    let menu = document.createElement('div');
    const menuItem = document.createElement('div');
    const menuPicture = document.createElement('div');
    const topDescription = document.createElement('div');
    const bottomDescription = document.createElement('div');
    
                // style + text of menu item 1
                menu.classList.add('menuTab');
                menuItem.classList.add('menuItem');
                menuPicture.classList.add('itemPicture');
                topDescription.classList.add('topDescription');
                topDescription.textContent = 'Classic Vanilla';
                bottomDescription.classList.add('bottomDescription');
                bottomDescription.textContent = 
                'Made from vanilla beans organically sourced from the island of Papua New Guinea';

    // menu item 2 
    const menuItem2 = document.createElement('div');
    const menuPicture2 = document.createElement('div');
    const topDescription2 = document.createElement('div');
    const bottomDescription2 = document.createElement('div');

                // style + text of menu item 2
                menuItem2.classList.add('menuItem');
                menuPicture2.classList.add('itemPicture');
                menuPicture2.style.cssText = "background-image: url(/Images/OP-Rest-Choc.jpg); align-self: center;";
                topDescription2.classList.add('topDescription');
                topDescription2.textContent = 'Belgium Chocolate Special';
                bottomDescription2.classList.add('bottomDescription');
                bottomDescription2.textContent = 'Rich decadent chocolate.';

    // menu item 3
    const menuItem3 = document.createElement('div');
    const menuPicture3 = document.createElement('div');
    const topDescription3 = document.createElement('div');
    const bottomDescription3 = document.createElement('div');
    
                // style + text of menu item 3
                menuItem3.classList.add('menuItem');
                menuPicture3.classList.add('itemPicture');
                menuPicture3.style.cssText = "background-image: url(/Images/OP-Rest-Coffee3.jpg); ";
                topDescription3.classList.add('topDescription');
                topDescription3.textContent = 'Coffee Dolce';
                bottomDescription3.classList.add('bottomDescription');
                bottomDescription3.textContent = 'Made from 100% Hawaiian Kona Coffee Beans';

    // menu item 4
    const menuItem4 = document.createElement('div');
    const menuPicture4 = document.createElement('div');
    const topDescription4 = document.createElement('div');
    const bottomDescription4 = document.createElement('div');
                        
                // style + text of menu item 4
                
                menuItem4.classList.add('menuItem');
                menuPicture4.classList.add('itemPicture');
                menuPicture4.style.cssText = "background-image: url(/Images/OP-Rest-Peach280.jpg);";
                topDescription4.classList.add('topDescription');
                topDescription4.textContent = 'Georgia Peach Cobbler';
                bottomDescription4.classList.add('bottomDescription');
                bottomDescription4.textContent = 'Made with organic Georgia peaches, this cobbler has been a fan favorite for nearly a decade!';
        
    // function that prints each menu item
    function enableMenu() {
        
        // prints menu item 1
        menu.classList.add('menuTab');
        content.appendChild(menu);
        menu.appendChild(menuItem);
        menuItem.appendChild(menuPicture);
        menuItem.appendChild(topDescription);
        menuItem.appendChild(bottomDescription);

        // prints menu item 2
        menu.appendChild(menuItem2);
        menuItem2.appendChild(menuPicture2);
        menuItem2.appendChild(topDescription2);
        menuItem2.appendChild(bottomDescription2); 
        
        // prints menu item 2
        menu.appendChild(menuItem3);
        menuItem3.appendChild(menuPicture3);
        menuItem3.appendChild(topDescription3);
        menuItem3.appendChild(bottomDescription3); 

        // prints menu item 2
        menu.appendChild(menuItem4);
        menuItem4.appendChild(menuPicture4);
        menuItem4.appendChild(topDescription4);
        menuItem4.appendChild(bottomDescription4); 

        


    }

    

    function disableMenu() {
        menu.classList.remove('menuTab');
        content.removeChild(menu)
    }

    return {
        create: enableMenu,
        disable: disableMenu
    }
})();






/***/ }),

/***/ "./src/Page Layout.js":
/*!****************************!*\
  !*** ./src/Page Layout.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "tabControls": () => (/* binding */ tabControls),
/* harmony export */   "footerContent": () => (/* binding */ footerContent)
/* harmony export */ });
/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.js */ "./src/Menu.js");
/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.js */ "./src/Home.js");
/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.js */ "./src/Contact.js");



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
        _Home_js__WEBPACK_IMPORTED_MODULE_1__.homeTab.homeCreate();
        footerContent.footer();

    }

    function disableHome() {
        // content.removeChild(home);
        // home.classList.remove('homeTab');
        _Home_js__WEBPACK_IMPORTED_MODULE_1__.homeTab.homeDisable();
    };

    function enableMenu() {
        _Menu_js__WEBPACK_IMPORTED_MODULE_0__.menuTab.create();
        footerContent.footer();
        
    }

    function disableMenu() {
        _Menu_js__WEBPACK_IMPORTED_MODULE_0__.menuTab.disable();
    }

    function enableContact() {
        _Contact_js__WEBPACK_IMPORTED_MODULE_2__.contactUsTab.create();
        footerContent.footer();
    }

    function disableContact() {
        _Contact_js__WEBPACK_IMPORTED_MODULE_2__.contactUsTab.disable();
    }

    return {
    enableHome: enableHome,
    disableHome: disableHome,
    enableMenu: enableMenu,
    disableMenu: disableMenu,
    enableContact: enableContact,
    disableContact: disableContact
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






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page Layout.js */ "./src/Page Layout.js");


// establishes page layout
_Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.header.header();
_Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableHome();
_Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.footerContent.footer();

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
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.disableHome();
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableMenu();
                        break;
                        case tabArray[0] === "Contact Us":
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.disableContact();
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableMenu();  
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
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.disableHome();
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableContact();
                        break;
                        case tabArray[0] === "Menu":
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.disableMenu();
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableContact();  
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
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.disableContact();
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableHome();
                        break;
                        case tabArray[0] === "Menu":
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.disableMenu();
                            _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableHome();  
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



})();

/******/ })()
;
//# sourceMappingURL=main.js.map
