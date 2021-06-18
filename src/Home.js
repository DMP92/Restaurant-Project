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

export {homeTab};

// notes
/* 
Switch the gift card section with the Intro section
make the Intro section a proper about us section

build the contact us logic

then once everything is finished, get it to be responsive -- something you should've been doing already
but stuff happens.
*/