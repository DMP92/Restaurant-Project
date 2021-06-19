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

export {contactUsTab};