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
            
    // creates text & a button for homeTabContent
    const hTCTitle = document.createElement('h2');
            hTCTitle.classList.add('hTCTitle');
            hTCTitle.textContent = "Gift Cards make the coolest gifts!";
    const hTCText = document.createElement('h3');
            hTCText.classList.add('hTCText');
            hTCText.textContent = "Treat the graduates in your life to their favorite flavors!"
    const hTCButton = document.createElement('button');
            hTCButton.classList.add('hTCButton');
            hTCButton.textContent = "Order online";

    // creates homeTabOutro div
    const homeTabOutro = document.createElement('div');
            homeTabOutro.classList.add('homeTabOutro');
            homeTabOutro.textContent = 'outro section';

    // function that appends each element made above to to 'homeTab' div
    function homeTabCreate() {
        content.appendChild(homeTab);
        homeTab.appendChild(homeTabLogo);
        // homeTab.appendChild(homeTabTitle);
        homeTab.appendChild(homeTabContent);
        homeTabContent.appendChild(hTCTitle);
        homeTabContent.appendChild(hTCText);
        homeTabContent.appendChild(hTCButton);
        homeTab.appendChild(homeTabOutro);
    }

    function homeTabDisable() {
        content.removeChild(homeTab);
        homeTab.removeChild(homeTabLogo);
        homeTab.removeChild(homeTabTitle);
        homeTab.removeChild(homeTabContent);
        homeTab.removeChild(homeTabOutro);
    }

    return {
        homeCreate: homeTabCreate,
        homeDisable: homeTabDisable
    }

})();

export {homeTab};