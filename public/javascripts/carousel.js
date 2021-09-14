window.addEventListener("load", () => {
    new Glider(document.querySelector(".relacionadoGlider"), {
        // Mobile-first defaults
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '#resp-dots',
        arrows: {
            prev: '.leftGlider',
            next: '.rightGlider'
        },
        responsive: [
            {
                // screens greater than >= 480px
                breakpoint: 480,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 769px
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ]
    })
})

window.addEventListener("load", () => {
    new Glider(document.querySelector(".glider"), {
        // Mobile-first defaults
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '#resp-dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
      });
})