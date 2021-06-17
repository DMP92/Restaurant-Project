
function itemFactory(name, price) {
    
    


    function createItem() {

        // var for getting menu div and creating item objects    
        let content = document.getElementById('content');
        let menu = document.querySelector('.menu');
        let itemCreate = document.createElement('div');
                itemCreate.classList.add('burger');
        
        // variables for creating each menu item's content
        let item = document.createElement('div');
                item.classList.add('itemPicture')
        let topDescription = document.createElement('h3');
                topDescription.classList.add('topDescription');
        let bottomDescription = document.createElement('h3');
                bottomDescription.classList.add('bottomDescription');

        itemCreate.classList.add('menuItem');
        itemCreate.textContent = name;
        bottomDescription.textContent = price;

        menu.appendChild(itemCreate);
        itemCreate.appendChild(item);
        itemCreate.appendChild(topDescription);
        itemCreate.appendChild(bottomDescription);
    }

    return {createItem}
}



// module for menu content 

const menuTab = (function() {

        // grabs content div
        const content = document.getElementById('content');
        // creates elements for menu tab
        const menu = document.createElement('div');
        
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        
        
        function enableMenu() {
            console.log('hey');
        content.appendChild(menu);
            menu.classList.add('menuTab');
        menu.appendChild(menuItem);
 
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