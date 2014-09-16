
$(function () {
    $scenes.on("click", "a.link", function (e) {
        var url;

        e.preventDefault();
        url = $(this).attr("href");

        // fade out, ajax request, then scramble, then fade in
        $.ajax({
            url: url,
            dataType: "json",
            success: renderPassage
        });
    });

    $scenes.on("click", "a.detail", function (e) {
        e.preventDefault();
    });
});
