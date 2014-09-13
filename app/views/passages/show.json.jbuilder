
@passage.senses.each do |sense|
  stimuli = sense.last

  json.set! sense.first do
    stimuli.each do |stimulus|
      json.content stimulus.content

      stimulus.links.each do |link|
        json.link do
          json.key link.key
          json.passage_id link.passage_id
        end
      end
    end
  end
end
