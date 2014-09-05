// clicking on a sense increases its volume by one step

$(document).ready(function () {
    var moon_size = 50*Math.sqrt(2),
        min_moon = moon_size/4.0;

    $(".senses > div").click(function sensesClickHandler (e) {
        var $this = $(e.currentTarget),
            $moon = $this.find(".moon"),
            diameter = $moon.width(),
            container_width = $this.width();

        if (diameter === 0) {
            diameter = moon_size;
        } else if ((diameter) <= min_moon) {
            diameter = 0;
        } else {
            diameter = diameter*0.6;
        }

        $moon.height(diameter);
        $moon.width(diameter);
        $moon.css({ top: container_width/2 - diameter/2, left: container_width/2 - diameter/2 });
    });

});
