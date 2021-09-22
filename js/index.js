// ******** CHANGE CSS ATTR ON SCROLL ********

const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {

        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
            cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {

            // Call our function and pass any params we received
            fn(...params);
        });

    }
};

// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();

// ******** SEARCH OVERLAY ********


$(document).ready(function(){

    
    document.getElementById('searchIcon').addEventListener('click', function(){


        $("#searchOverlay").css({ top: '0px' })


    });

    document.getElementById('mobileSearchIcon').addEventListener('click', function(){


        $("#searchOverlay").css({ top: '0px' })


    });


    document.getElementById('closeSearchOverlay').addEventListener('click', function(){


        $("#searchOverlay").css({ top: '-100px' })
    });

});

// ******** SWIPER ********

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});
