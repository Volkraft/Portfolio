const timelinePreview = gsap.timeline({})
const list = document.querySelectorAll('[data-anim="headerDesktop"]');
const previewItems = document.querySelectorAll('[data-anim="preview"]');

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


