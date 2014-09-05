// clicking on a sense increases its volume by one step

$(document).ready(function () {

    $(".senses > div").click(function sensesClickHandler (e) {
        var $this = $(e.currentTarget),
            $moon = $this.find(".moon"),
            diameter = $moon.width(),
            container_width = $this.width();

        if (diameter <= (50.0/8)) {
            $moon.height(50);
            $moon.width(50);
        } else {
            $moon.height(diameter/2);
            $moon.width(diameter/2);

            $moon.css({ left: container_width/2 - $moon.width()/2, top: container_width/2 - $moon.width()/2 });
        }
    });

});
