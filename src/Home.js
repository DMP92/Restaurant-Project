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
            hTCTitle.textContent = "Gift cards make the coolest gifts!";
    const hTCText = document.createElement('h3');
            hTCText.classList.add('hTCText');
            hTCText.textContent = "Treat the graduates in your life to their favorite flavors!";
    const hTCButton = document.createElement('button');
            hTCButton.classList.add('hTCButton');
            hTCButton.textContent = "Order online";

    // creates homeTabIntro div
    const homeTabIntro = document.createElement('div');
            homeTabIntro.classList.add('homeTabIntro');
            homeTabIntro.textContent = "Opened . Quality you can taste!";

    // function that appends each element made above to to 'homeTab' div
    function homeTabCreate() {
        content.appendChild(homeTab);
        homeTab.appendChild(homeTabLogo);
        homeTab.appendChild(homeTabIntro);
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

export {homeTab};

// notes
/* 
Switch the gift card section with the Intro section
make the Intro section a proper about us section

build the contact us logic

then once everything is finished, get it to be responsive -- something you should've been doing already
but stuff happens.
*/