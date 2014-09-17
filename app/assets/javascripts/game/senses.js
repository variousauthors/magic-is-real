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
            $stimulus.find("a").removeClass("active");

            if (ratio <= 0) {
                $stimulus.addClass("translucent");
            }
        } else {
            $stimulus.find("a").addClass("active");
        }
    });
};

$(document).ready(function () {

    // initial opacities for the stimuli
    $moons.removeClass("animoon");
    setMoonSize($senses.find(".sight").children(".moon"), 46, 0.9);
    setMoonSize($senses.find(".smell").children(".moon"), 46, 0.33);
    setMoonSize($senses.find(".sound").children(".moon"), 46, 0.5);
    setMoonSize($senses.find(".touch").children(".moon"), 46, 0.0);
    setMoonSize($senses.find(".taste").children(".moon"), 46, 0.0);
    setMoonSize($senses.find(".magic").children(".moon"), 46, 0.0);

    // initial opacities for the stimuli
    $stimuli.removeClass("stimulus");
    $stimuli.css({ opacity: 0 });
    $scenes.find(".sight").children().css({ opacity: 0.9 });
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
