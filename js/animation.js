const timelinePreview = gsap.timeline({})
const list = document.querySelectorAll('[data-anim="headerDesktop"]');
const previewItems = document.querySelectorAll('[data-anim="preview"]');
// const contactsItems = document.querySelectorAll('[data-anim="contactsMe"]')
// const welcomeItems = document.querySelectorAll('[data-anim="welcome"]')
// header

list.forEach(item => {
    timelinePreview.from(item,{
        y:400,
        duration:2,
        opacity:0,
        delay: 0.1,
        ease:"back.out(1)",
    },'<');
})

// preview
previewItems.forEach(item =>{
    timelinePreview.from(item,{
        y:400,
        duration:2,
        opacity:0,
        delay: 0.5,
        ease:"back.out(1.1)",
    },'<');
})

// About Me

// timelinePreview.from('[data-anim="aboutMeTitle"]',{
//     opacity:0,
//     y:400,
//     ease:"back.out(1.5)",
//     scrollTrigger:{
//         // markers:true,
//         trigger: '.about-me',
//         start: '20% 70%',
//         end:'20% 50%',
//         scrub:1.5,
//         toggleActions: 'play none none reverse',
//     }
// })

// timelinePreview.from('[data-anim="aboutMeDescription"]',{
//     opacity:0,
//     y:400,
//     ease:"back.out(1.3)",
//     scrollTrigger:{
//         // markers:true,
//         trigger: '.about-me',
//         start: '20% 60%',
//         end:'20% 40%',
//         scrub:1.5,
//         toggleActions: 'play none none reverse',
//     }
// })

// timelinePreview.from('[data-anim="aboutMeButton"]',{
//     opacity:0,
//     y:400,
//     ease:"back.out(1.3)",
//     scrollTrigger:{
//         // markers:true,
//         trigger: '.about-me',
//         start: '20% 60%',
//         end:'20% 70%',
//         scrub:1.5,
//         toggleActions: 'play none none reverse',
//     }
// })

// timelinePreview.from('[data-anim="aboutMeButton"]',{
//     opacity:0,
//     y:400,
//     ease:"back.out(1.3)",
//     scrollTrigger:{
//         // markers:true,
//         trigger: '.about-me',
//         start: '20% 50%',
//         end:'20% 70%',
//         scrub:1.5,
//         toggleActions: 'play none none reverse',
//     }
// })


// gsap.from('.my-project__wrapper-card',{
//     stagger:0.3,
//     opacity:0,
//     y:400,
//     scrollTrigger:{
//         // markers:true,
//         trigger: '.my-project',
//         start: 'top 60%',
//         end:'20% 50%',
//         scrub:1.5,
//         toggleActions: 'play none none reverse',
//     }
// })



// gsap.from('[data-anim="contactsMe"]',{
//     stagger:0.3,
//     opacity:0,
//     y:400,
//     duration: 0.5,
//     ease:"back.out(1.1)",
//     scrollTrigger:{
//         markers:true,
//         trigger: '.contact-me',
//         start: 'top 60%',
//         end:'top 40%',
//         scrub:1.5,
//         toggleActions: 'play none none reverse',
//     }
// })

// contactsItems.forEach(item =>{
//     gsap.from(item,{
//         y:400,
//         duration:2,
//         opacity:0,
//         stagger: 0.3,
//         ease:"back.out(1.1)",
//         scrollTrigger:{
//             // markers:true,
//             trigger: '.contact-me',
//             start: 'top 60%',
//             end:'20% 50%',
//             scrub:1.5,
//             toggleActions: 'play none none reverse',
//         }
//     });
// })
