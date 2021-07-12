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
function loadmore(){
    var p=[];
    $.ajax({
        url:"data/recipes.json",
        method: "GET",
        success: function (rs){
            p=rs;
            var covid = $("#covid");
            for (var i=0;i<p.length;i++){
                var ct = "<div class=\"col-md-3\">\n" +
                    "                        <div class=\"recipes\">\n" +
                    "                            <a href=\"#\">\n" +
                    "                                <img class=\"cover\" src=\""+p[i].image+"\">\n" +
                    "                                <h3>"+p[i].name+"</h3>\n" +
                    "                                <p>"+p[i].description+"</p>\n" +
                    "                            </a>\n" +
                    "                        </div>";
                covid.append(ct);
            }
        }
    });
}