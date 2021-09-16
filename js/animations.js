// ******** ANIMATIONS ********
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
    
    ease: "Power1.easeInOut",
    duration: .7, 
})

ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    start: 'center 85%',
    end: 'top 20%',
    markers: false,
})

gsap.to(".hero .mobile-logo", {duration:0.6, opacity:1})
gsap.fromTo(".hero-text-container *", {opacity: 0, x:-100}, {duration: .3, delay: 0.6, opacity: 1, x: 0, stagger: .1, ease: "power2.inOut"})


// ******** NAVBAR ********

gsap.fromTo(".navbar", {
    opacity: 0, y:-200
    }, {
        scrollTrigger: {

            toggleActions: 'play none none none',
            trigger: ".navbar",
        },
        opacity: 1, 
        y: 0, 
    }
)

gsap.fromTo(".arrow", {
    opacity: 0, y:-50
    }, {
        scrollTrigger: {
            trigger: ".navbar",
        },
        delay: 1.5,
        opacity: 1, 
        y: 0, 
    }
)


// // ******** FIRST SECTION ********

// gsap.fromTo("#first-section h2", {
//     opacity: 0, x:-100
//     }, {
//         scrollTrigger: {
//             trigger: "#first-section h2 ",
//         },
//         opacity: 1, 
//         x: 0, 
//     }
// )

// gsap.fromTo("#first-section video", {
//     opacity: 0, x:100
//     }, {
//         scrollTrigger: {
//             trigger: "#first-section video",
//         },
//         opacity: 1, 
//         x: 0, 
//     }
// )

// gsap.fromTo("#first-section p", {
//     opacity: 0, x:-100
//     }, {
//         scrollTrigger: {
//             trigger: "#first-section p",
//         },
//         opacity: 1, 
//         x: 0, 
//     }
// )

// gsap.fromTo("#first-section button", {
//     opacity: 0, x:-100
//     }, {
//         scrollTrigger: {
//             trigger: "#first-section button",
//         },
//         opacity: 1, 
//         x: 0, 
//     }
// )

// gsap.fromTo("#first-section .home-gallery", {
//     opacity: 0, y:200
//     }, {
//         scrollTrigger: {
//             trigger: "#first-section .home-gallery",
//             start: '-=200 85%',
//         },
//         opacity: 1, 
//         y: 0, 
//     }
// )


// // ******** SECOND SECTION ********

// gsap.fromTo("#second-section h2", {
//     opacity: 0, x:100
//     }, {
//         scrollTrigger: {
//             trigger: "#second-section h2 ",
//         },
//         opacity: 1, 
//         x: 0, 
//     }
// )

// gsap.fromTo("#second-section img", {
//     opacity: 0, x:-100
//     }, {
//         scrollTrigger: {
//             trigger: "#second-section img",
//         },
//         opacity: 1, 
//         x: 0, 
//     }
// )

// gsap.fromTo("#second-section p", {
//     opacity: 0, x:100
//     }, {
//         scrollTrigger: {
//             trigger: "#second-section p",
//         },
//         opacity: 1, 
//         x: 0, 
//     }
// )

// gsap.fromTo("#second-section button", {
//     opacity: 0, x:100
//     }, {
//         scrollTrigger: {
//             trigger: "#second-section button",
//         },
//         opacity: 1, 
//         x: 0, 
//     }
// )

// gsap.fromTo("#second-section .home-gallery", {
//     opacity: 0, y:200
//     }, {
//         scrollTrigger: {
//             trigger: "#second-section .home-gallery",
//             start: '-=200 85%',
//         },
//         opacity: 1, 
//         y: 0, 
//     }
// )


// // ******** CREDITOS ********

// gsap.fromTo(".credits h2", {
//     opacity: 0, y:-50
//     }, {
//         scrollTrigger: {
//             trigger: ".credits h2",
//         },
//         opacity: 1, 
//         y: 0,
//     }
// )


// gsap.fromTo(".credits .swiper-container", {
//     opacity: 0, y:200
//     }, {
//         scrollTrigger: {
//             trigger: ".credits .swiper-container",
//             start: '-=100 85%',
//         },
//         opacity: 1, 
//         y: 0,


//         ease: "Power1.easeIn",
//         duration: 1, 
//     }
// )
