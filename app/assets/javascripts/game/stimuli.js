$(function () {
    var scramble;

    scramble = function scramble (index, stimulus) {
        var width = $scenes.width();

        $(stimulus).css({ top: Math.random() * width, left: Math.random() * width - 50 });
    };

    // scramble the stimuli
    $stimuli.each(scramble);

    $stimuli.on("click", "a.link", function (e) {
        e.preventDefault();

        // fade out, ajax request, then scramble, then fade in
    });

    $stimuli.on("click", "a.detail", function (e) {
        e.preventDefault();
    });
});
