# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

sight = Sense.create({ name: 'sight' })
sound = Sense.create({ name: 'sound' })
smell = Sense.create({ name: 'smell' })
touch = Sense.create({ name: 'touch' })
taste = Sense.create({ name: 'taste' })
magic = Sense.create({ name: 'magic' })

def init_from_yaml
  File.open('db/seeds.yaml') do |yaml_file|
    seeds = YAML::load(yaml_file)
    passages = []

    seeds.each do |seed|
      passage = Passage.create!({ name: seed["name"] })

      # later we will need to link the passages to the stimuli
      passages[passage.id] = passage
      seed["passage_id"] = passage.id
    end

    # then update each passage from the seeds
    seeds.each do |seed|
      # recover the passage so that we don't query again (why?)
      passage = passages[seed["passage_id"]]
      seed.delete("passage_id")

      seed["stimuli_attributes"].each do |stimulus|
        links = stimulus.delete("links")
        sense = stimulus.delete("sense")

        stimulus = passage.stimuli.create(stimulus)
        stimulus.for_sense(sense)

        links.to_a.each do |link|
          stimulus.add_link(link["key"], link["passage"])
        end
      end
    end
  end
end

init_from_yaml
