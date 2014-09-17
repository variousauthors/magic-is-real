var moon_for_stimulus, get_moon_phase;

moon_for_stimulus = function moon_for_stimulus ($stimulus) {
    var sense = $stimulus.parent().attr("class");

    return $moons.parent("." + sense).children(".moon");
};

get_moon_phase = function get_moon_phase ($moon) {
    return $moon.width() / moon_size;
};

$(function () {
    $scenes.on("click", "a.link", function (e) {
        var url, $this, $moon;

        e.preventDefault();

        // TODO if the relevant moon is full, then the link works
        $this = $(this);

        if ($this.parent().css("opacity") >= 1) {
            url = $this.attr("href");

            // fade out, ajax request, then scramble, then fade in
            $.ajax({
                url: url,
                dataType: "json",
                success: renderPassage
            });
        }
    });

    $scenes.on("click", "a.detail", function (e) {
        e.preventDefault();
    });
});
