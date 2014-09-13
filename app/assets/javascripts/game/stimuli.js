$(function () {
    var scramble, render, renderCollection;

    scramble = function scramble (index, stimulus) {
        var width = $scenes.width();

        $(stimulus).css({ top: Math.random() * width, left: Math.random() * width - 50 });
    };

    render = function render (sense, stimulus) {
        var $stimulus = $("<div>").addClass("stimulus");

        $stimulus.html(stimulus.content);
        $scenes.find('.' + sense).append($stimulus);
    };

    renderCollection = function renderCollection (stimuli) {
        $.each(stimuli, render);
        $stimuli.each(scramble);
    };

    // scramble the stimuli
    $stimuli.each(scramble);

    $stimuli.on("click", "a.link", function (e) {
        e.preventDefault();

        // fade out, ajax request, then scramble, then fade in
        $.ajax({
            url: "passages/1",
            dataType: "json",
            success: renderCollection
        });
    });

    $stimuli.on("click", "a.detail", function (e) {
        e.preventDefault();
    });
});
