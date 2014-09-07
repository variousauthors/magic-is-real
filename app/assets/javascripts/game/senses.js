// clicking on a sense increases its volume by one step

$(document).ready(function () {
    var moon_size = 50*Math.sqrt(2),
        min_moon = moon_size/4.0,
        resizeMoon, fadeStimuli,
        $scenes = $(".scenes");

    // TODO container_width could be a constant
    resizeMoon = function resizeMoon ($moon, $container) {
        var diameter = $moon.width(),
            container_width = $container.width();

        // resize the sense moon
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

        // we need to return the diameter because the animations are async
        return diameter;
    };

    fadeStimuli = function fadeStimuli ($stimuli, ratio) {
        $stimuli.find(".stimulus").css({ opacity: ratio });

        // TODO if a stimulus is not 100 opaque, its links should not work. (how to do this)
    };

    $(".senses > div").click(function sensesClickHandler (e) {
        var $this = $(e.currentTarget),
            $moon = $this.find(".moon"),
            sense = $moon.parent().attr("class"),
            $stimuli = $scenes.find("." + sense),
            diameter;

        diameter = resizeMoon($moon, $this);

        fadeStimuli($stimuli, diameter / $this.width());
    });

    // scramble the stimuli
    $(".stimulus").each(function (index, stimulus) {
        var width = $scenes.width();

        $(stimulus).css({ top: Math.random() * width, left: Math.random() * width - 50 });
    });
});
