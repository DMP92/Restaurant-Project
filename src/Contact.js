// this module contains a revealing module pattern for the contact tab in this project

// logic for contact tab
const contactUsTab = (function() {

    // variable that grabs #content div
    const content = document.getElementById('content');

    // variables that create contact us tab
    const contactTab = document.createElement('div');
                contactTab.classList.add('contactTab');

    function createContactTab() {
        content.appendChild(contactTab);
    }

    function disableContactTab() {
        content.removeChild(contactTab);
    }

    return {
        create: createContactTab,
        disable: disableContactTab
    }
})();

export {contactUsTab};