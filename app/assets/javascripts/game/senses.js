// clicking on a sense increases its volume by one step
var shrinkMoon, fadeStimuli, setMoonSize,
    moon_size = 50*Math.sqrt(2), min_moon = moon_size/4.0;

setMoonSize = function setMoonSize ($moon, container_width, scale) {
    var diameter = $moon.width()*scale;

    $moon.height(diameter);
    $moon.width(diameter);
    $moon.css({ top: container_width/2 - diameter/2, left: container_width/2 - diameter/2 });
};

// TODO container_width could be a constant
shrinkMoon = function shrinkMoon ($moon, $container) {
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

fadeStimuli = function fadeStimuli ($sense, ratio) {
    var $relevant_stimuli = $sense.find(".stimulus").css({ opacity: ratio });

    $relevant_stimuli.each(function (index, element) {
        var $stimulus = $(element);
        $stimulus.removeClass("translucent");

        if (ratio < 1) {
            $stimulus.parent().removeClass("active");

            if (ratio <= 0) {
                $stimulus.addClass("translucent");
            }
        } else {
            $stimulus.parent().addClass("active");
        }
    });
};

$(document).ready(function () {
    var dimension;

    // initial moon dimensions
    $moons.removeClass("animoon");
    dimension = 50 - 2*2;
    setMoonSize($senses.find(".sight").children(".moon"), dimension, 1);
    setMoonSize($senses.find(".smell").children(".moon"), dimension, 0.33);
    setMoonSize($senses.find(".sound").children(".moon"), dimension, 0.5);
    setMoonSize($senses.find(".touch").children(".moon"), dimension, 0.0);
    setMoonSize($senses.find(".taste").children(".moon"), dimension, 0.0);
    setMoonSize($senses.find(".magic").children(".moon"), dimension, 0.0);

    // initial opacities for the stimuli
    $stimuli.removeClass("stimulus");
    $stimuli.css({ opacity: 0 });
    $scenes.find(".sight").addClass("active").children().css({ opacity: 1 });
    $scenes.find(".smell").children().css({ opacity: 0.33 });
    $scenes.find(".sound").children().css({ opacity: 0.5 });

    // re-add the class once the animation is done
    window.setTimeout(function () {
        $stimuli.addClass("stimulus");
        $moons.addClass("animoon");
    }, 0);

    $(".senses > div").click(function sensesClickHandler (e) {
        var $this = $(e.currentTarget),
            $moon = $this.find(".moon"),
            sense = $moon.parent().attr("class"),
            $stimuli = $scenes.find("." + sense),
            diameter;

        diameter = shrinkMoon($moon, $this);

        fadeStimuli($stimuli, diameter / $this.width());
    });
});
