
@passage.senses.each do |sense|
  stimuli = sense.last

  json.set! sense.first do
    json.array! stimuli do |stimulus|
      # pre-splitting for recombination on the client
      json.tokens stimulus.content.split(" ")
      json.content stimulus.content
      json.sense sense.first

      json.set! "links" do
        json.array! stimulus.links do |link|
          json.key link.key
          json.passage_id link.passage_id
        end
      end
    end
  end
end
