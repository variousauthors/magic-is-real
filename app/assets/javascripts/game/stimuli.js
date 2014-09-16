var scramble, renderStimulus, renderSense, renderPassage, parseStimulus;

parseStimulus = function parseStimulus (stimulus) {
    var link, token, i, j, index, next, tokens = stimulus.tokens;

    // nothing to do, so just return the joined string
    if (stimulus.links === undefined) return stimulus.content;

    // replace all tokens matching the link keys with anchors
    for (i = 0; i < stimulus.links.length; i++) {
        link = stimulus.links[i];

        for (j = 0; j < tokens.length; j++) {
            token = tokens[j];
            index = token.indexOf(link.key), next;

            // if we are dealing with a word that begins
            // with the key word
            if (index === 0) {
                // and the next character is not alphabetical
                next = token.charAt(index + token.length);
                if (!isAlpha(next) || next === "") {
                    tokens[j] = "<a class='link' href='" + passages_url(link.passage_id) + "'>" + tokens[j] + "</a>";
                }
            }
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
    html = parseStimulus(stimulus);

    $stimulus.html(html);
    $scenes.find('.' + stimulus.sense).append($stimulus);
};

renderSense = function renderSense (sense, stimuli, c, d) {
    // TODO break this into a function
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

