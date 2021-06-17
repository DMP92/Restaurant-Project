
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




export { menuTab };