// this module contains a revealing module pattern for the contact tab in this project

// logic for contact tab
const contactUsTab = (function() {

    window.addEventListener('resize', mapWidth);
    // variable that grabs #content div
    const content = document.getElementById('content');

    // variables that create contact us tab
    const contactTab = document.createElement('div');
                contactTab.classList.add('contactTab');

    // variables for hours of business section
    const hoursDiv = document.createElement('div');
                hoursDiv.classList.add('hoursDiv');
                
    const hoursHead = document.createElement('div');
                hoursHead.classList.add('hoursHead');
                hoursHead.textContent = "Store Hours";

    const hoursGrid = document.createElement('div');
                hoursGrid.classList.add('hoursGrid');
                
            // variables for days of week
            const mon = document.createElement('div');
                mon.classList.add('mon');
                mon.textContent = "Mon";
            const tue = document.createElement('div');
                tue.classList.add('tue');
                tue.textContent = "Tue";
            const wed = document.createElement('div');
                wed.classList.add('wed');
                wed.textContent = "Wed";
            const thu = document.createElement('div');
                thu.classList.add('thu');
                thu.textContent = "Thu";
            const fri = document.createElement('div');
                fri.classList.add('fri');
                fri.textContent = "Fri";
            const sat = document.createElement('div');
                sat.classList.add('sat');
                sat.textContent = "Sat";
            const sun = document.createElement('div');
                sun.classList.add('sun');
                sun.textContent = "Sun";

                // hours for each weekday from day one (monday) to 7 (sunday)
                const day1 = document.createElement('div');
                    day1.classList.add('day1');
                    day1.textContent = '8am - 10pm';
                const day2 = document.createElement('div');
                    day2.classList.add('day2');
                    day2.textContent = '8am - 10pm';
                const day3 = document.createElement('div');
                    day3.classList.add('day3');
                    day3.textContent = '8am - 10pm';
                const day4 = document.createElement('div');
                    day4.classList.add('day4');
                    day4.textContent = '8am - 10pm';
                const day5 = document.createElement('div');
                    day5.classList.add('day5');
                    day5.textContent = '8am - 10pm';
                const day6 = document.createElement('div');
                    day6.classList.add('day6');
                    day6.textContent = 'Closed';
                const day7 = document.createElement('div');
                    day7.classList.add('day7');
                    day7.textContent = '8am - 10pm';


            const hoursOf = document.createElement('div');
                hoursOf.classList.add('hoursOf');
            const closed = document.createElement('div');

              // variables for phone number section
    
    const phone1 = document.createElement('div');
            phone1.classList.add('phone1');
            phone1.textContent = '123 - 456 - 7890';

    const phone2 = document.createElement('div');
            phone2.classList.add('phone2');
            phone2.textContent = 'Fructece@gmail.com';

        const phoneLink = document.createElement('div');
            phoneLink.classList.add('phoneLink');
            phoneLink.innerHTML = "<a href='https://en.wikipedia.org/wiki/Rickrolling'> Facebook </a>";

    

    // variables for creating a map element
    const iframeContainer = document.createElement('div');
                iframeContainer.classList.add('iframeContainer');

    const iframe = document.createElement('div');
                iframe.classList.add('iframe');
                iframe.setAttribute("id", "gmap_canvas");
                
                
    // function for creating embedding the map
    function mapWidth() {

        // variable for fetching window width
        const winWidth = window.innerWidth;
        console.log(winWidth);
        if (winWidth > 768) {
            iframe.innerHTML = `
            <iframe 
                src="https://maps.google.com/maps?width=520&height=400&hl=en&q=%20Seattle+()&t=&z=12&ie=UTF8&iwloc=B&output=embed" 
                scrolling="no"
                marginheight="0" 
                marginwidth="0" 
                id="gmap_canvas" 
                height="400px"
                width="520px"
                frameborder="0">
            </iframe> 
            <a href='https://addmap.net/'>
            </a> 
            <script 
                type='text/javascript' 
                src='https://embedmaps.com/google-maps-authorization/script.js?id=c910574e6787e0e2131ec2fd427386046d8f2364'>
            </script> `;

        } else if (winWidth < 768) {
            iframe.innerHTML = `
            <iframe 
                src="https://maps.google.com/maps?width=520&height=400&hl=en&q=%20Seattle+()&t=&z=12&ie=UTF8&iwloc=B&output=embed" 
                scrolling="no"
                marginheight="0" 
                marginwidth="0" 
                id="gmap_canvas" 
                height="300px"
                width="300px"
                frameborder="0">
            </iframe> 
            <a href='https://addmap.net/'>
            </a> 
            <script 
                type='text/javascript' 
                src='https://embedmaps.com/google-maps-authorization/script.js?id=c910574e6787e0e2131ec2fd427386046d8f2364'>
            </script> `;

        }
    }
                

    const address = document.createElement('div');
                address.classList.add('address');
                address.textContent = "694 W. Division St, Seattle, WA 89583";

    function createContactTab() {
        content.appendChild(contactTab);
            contactTab.appendChild(hoursDiv);
                hoursDiv.appendChild(hoursHead);
                hoursDiv.appendChild(hoursGrid);
                    hoursGrid.appendChild(mon);
                    hoursGrid.appendChild(tue);
                    hoursGrid.appendChild(wed);
                    hoursGrid.appendChild(thu);
                    hoursGrid.appendChild(fri);
                    hoursGrid.appendChild(sat);
                    hoursGrid.appendChild(sun);
                    hoursGrid.appendChild(day1);
                    hoursGrid.appendChild(day2);
                    hoursGrid.appendChild(day3);
                    hoursGrid.appendChild(day4);
                    hoursGrid.appendChild(day5);
                    hoursGrid.appendChild(day6);
                    hoursGrid.appendChild(day7);
                    hoursGrid.appendChild(hoursOf);
                    hoursGrid.appendChild(closed);
                    hoursGrid.appendChild(phone1);
                    hoursGrid.appendChild(phone2);
                    hoursGrid.appendChild(phoneLink);
            contactTab.appendChild(iframeContainer);
            mapWidth();
            iframeContainer.appendChild(iframe);
            iframeContainer.appendChild(address);
    }

    function disableContactTab() {
        content.removeChild(contactTab);
        contactTab.removeChild(iframeContainer);
        iframeContainer.removeChild(iframe);
    }

    return {
        create: createContactTab,
        disable: disableContactTab
    }

})();

export {contactUsTab};