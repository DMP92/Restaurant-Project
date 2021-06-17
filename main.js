/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTab": () => (/* binding */ menuTab)
/* harmony export */ });

function itemFactory(name, price) {

    // variables for getting menu div and creating item objects    
    let content = document.getElementById('content');
    let menu = document.querySelector('.menuTab');
    let menuItem = document.createElement('div');
            menuItem.classList.add('menuItem2');
    
    // variables for creating each menu item's content
    let menuPicture = document.createElement('div');
            menuPicture.classList.add('itemPicture')
    let topDescription = document.createElement('div');
            topDescription.classList.add('topDescription');
    let bottomDescription = document.createElement('div');
            bottomDescription.classList.add('bottomDescription');
    
            
    function createItem(string) {
                
        menuItem.classList.add('menuItem');
        menuPicture.textContent = name;
        topDescription.textContent = string;
        bottomDescription.textContent = price;

        
        menu.appendChild(menuItem);
        menuItem.appendChild(menuPicture);
        menuItem.appendChild(topDescription);
        menuItem.appendChild(bottomDescription);
    }

    return {createItem}
}



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
    let menu2 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuPicture2 = document.createElement('div');
    const topDescription2 = document.createElement('div');
    const bottomDescription2 = document.createElement('div');

                // style + text of menu item 2
                menu2.classList.add('menuTab');
                menuItem2.classList.add('menuItem');
                menuPicture2.classList.add('itemPicture');
                menuPicture2.style.cssText = "background-image: url(/src/Images/OP-Rest-Choc.jpg);";
                topDescription2.classList.add('topDescription');
                topDescription2.textContent = 'Belgium Chocolate Special';
                bottomDescription2.classList.add('bottomDescription');
                bottomDescription2.textContent = '$15.99';

    // menu item 3
    let menu3 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuPicture3 = document.createElement('div');
    const topDescription3 = document.createElement('div');
    const bottomDescription3 = document.createElement('div');
    
                // style + text of menu item 3
                menu3.classList.add('menuTab');
                menuItem3.classList.add('menuItem');
                menuPicture3.classList.add('itemPicture');
                menuPicture3.style.cssText = "background-image: url(/src/Images/OP-Rest-Coffee2.jpg);";
                topDescription3.classList.add('topDescription');
                topDescription3.textContent = 'Coffee Dolce';
                bottomDescription3.classList.add('bottomDescription');
                bottomDescription3.textContent = 'Made from 100% Hawaiian Kona Coffee Beans';

    // menu item 4
    let menu4 = document.createElement('div');
    const menuItem4 = document.createElement('div');
    const menuPicture4 = document.createElement('div');
    const topDescription4 = document.createElement('div');
    const bottomDescription4 = document.createElement('div');
                        
                // style + text of menu item 4
                menu4.classList.add('menuTab');
                menuItem4.classList.add('menuItem');
                menuPicture4.classList.add('itemPicture');
                topDescription4.classList.add('topDescription');
                topDescription4.textContent = 'Belgium Chocolate Special';
                bottomDescription4.classList.add('bottomDescription');
                bottomDescription4.textContent = '$15.99';
        
    // function that prints each menu item
    function enableMenu() {
        
        // prints menu item 1
        content.appendChild(menu);
        menu.appendChild(menuItem);
        menuItem.appendChild(menuPicture);
        menuItem.appendChild(topDescription);
        menuItem.appendChild(bottomDescription);

        // prints menu item 2
        content.appendChild(menu);
        menu.appendChild(menuItem2);
        menuItem2.appendChild(menuPicture2);
        menuItem2.appendChild(topDescription2);
        menuItem2.appendChild(bottomDescription2); 
        
        // prints menu item 2
        content.appendChild(menu);
        menu.appendChild(menuItem3);
        menuItem3.appendChild(menuPicture3);
        menuItem3.appendChild(topDescription3);
        menuItem3.appendChild(bottomDescription3); 

        // prints menu item 2
        content.appendChild(menu);
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


// **** Page Layout.js is a file that does two things:

//      1. Creates the grid that contains:
//              - the header
//              - the main content area
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
        _Menu_js__WEBPACK_IMPORTED_MODULE_0__.menuTab.create();
        footerContent.footer();
        
    }

    function disableMenu() {
        _Menu_js__WEBPACK_IMPORTED_MODULE_0__.menuTab.disable();
    }

    return {
    enableMain: mainTab,
    disableMain: disableMain,
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
_Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableMain();
_Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.footerContent.footer();

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
                    _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableMenu();
                    _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.disableMain();
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
                    _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.disableMenu();
                    _Page_Layout_js__WEBPACK_IMPORTED_MODULE_0__.tabControls.enableMain();
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