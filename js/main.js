var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});