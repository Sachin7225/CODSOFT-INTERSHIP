var tl = gsap.timeline()
tl.from(".logo,.nav-elements ul li  ",{
    y:-80,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3
})

tl.from(".header-left",{
    x:-180,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3
})



gsap.from(".section-flex h1 p .section-icons",{
    x:-180,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:".section-content",
        scroller:"body",
        markers:true,
        start:"top 20%"
    }

})