

function cursorEffect() {
    var page8Content = document.querySelector(".page8")
    var cursor = document.querySelector(".cursor")
    page8Content.addEventListener('mousemove', function (dets) {
        console.log(dets.x)
        //   det.x tells the value of mouse in x-axis.
        // cursor.style.left = dets.x+"px"
        // cursor.style.top = dets.y+"px"
        // dets.x and y is used for the cursor follow in x and y axis and left and top.
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
        })
    })

    page8Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        })
    })
    page8Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        })
    })
}
cursorEffect()



function page1Animation() {

    var tl = gsap.timeline()
    tl.from("#loader h3", {
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
    })

    tl.to("#loader h3", {
        opacity: 0,
        x: -18,
        duration: 1,
        stagger: 0.5,
    })


    tl.to("#loader", {
        display: "none",
    })

    tl.from(".nav-left", {
        y: -200,
        opacity: 0,
        stagger: 1,
        duration: 0.4,
    })
    tl.from(".nav-right h4", {
        y: -200,
        opacity: 0,
        stagger: 0.3,
        duration: 0.4,
    })
    tl.from(".span span", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
    })
}

page1Animation()


function page2Animation() {

    gsap.from(".heading-page2 h1", {
        y: 220,
        stagger: 1,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            scrollTrigger: {
                trigger: ".page2",
                scroller: "body",
                start: "top 20%",
            }
        }
    })
}
page2Animation()

