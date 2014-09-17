var scramble, renderStimulus, renderSense, renderPassage, parseStimulus, renderLink;

renderLink = function renderLink (i, link, tokens) {
    var token = tokens[i],
        index = token.indexOf(link.key), next;

    // if we are dealing with a word that begins
    // with the key word
    if (index === 0) {
        // and the next character is not alphabetical
        next = token.charAt(index + token.length);
        if (!isAlpha(next) || next === "") {
            tokens[i] = "<a class='link' href='" + passages_url(link.passage_id) + "'>" + tokens[i] + "</a>";
        }
    }
};

parseStimulus = function parseStimulus (stimulus) {
    var link, token, i, j, index, next, tokens = stimulus.tokens;

    // nothing to do, so just return the joined string
    if (stimulus.links === undefined) return stimulus.content;

    // replace all tokens matching the link keys with anchors
    for (i = 0; i < stimulus.links.length; i++) {
        link = stimulus.links[i];

        for (j = 0; j < tokens.length; j++) {
            renderLink(j, link, tokens);
        }
    }

    return tokens.join(" ");
};

scramble = function scramble (index, stimulus) {
    var width = $scenes.width();

    $(stimulus).css({ top: Math.random() * width, left: Math.random() * width - 50 });
};

renderStimulus = function renderStimulus (index, stimulus) {
    var $stimulus = $("<div>").addClass("stimulus"),
        html = parseStimulus(stimulus),
        $moon = $moons.parent("." + stimulus.sense).children(".moon");

    $stimulus.html(html);
    $stimulus.css({ opacity: $moon.width() / moon_size });
    $scenes.find('.' + stimulus.sense).append($stimulus);
};

renderSense = function renderSense (sense, stimuli, c, d) {
    $.each(stimuli, renderStimulus);
};

renderPassage = function renderPassage (senses) {
    console.log("yes");
    // clear the scenes
    $scenes.children().empty()

    $.each(senses, renderSense);
    $stimuli = $(".stimulus"); // recache the stimuli
    $stimuli.each(scramble);
};

