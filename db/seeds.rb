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

# must create all rooms first, for the links to work
room1 = Passage.create({ name: 'room1' })
room2 = Passage.create({ name: 'room2' })

# WITH PUNCTUATION
room1.stimuli << sight.stimuli.create({ content: "You see... a duck" })
room1.stimuli << sight.stimuli.create({ content: "You see a dog" })

room1.stimuli << sound.stimuli.create({ content: "You hear a tiger" })
room1.stimuli << sound.stimuli.create({ content: "You hear a lion" })

room1.stimuli << taste.stimuli.create({ content: "You taste boar" })

stimulus = taste.stimuli.create({ content: "You taste whale" })
stimulus.add_link("whale", "room2")
room1.stimuli << stimulus
  
# WIDTH A DETAIL
room1.stimuli << touch.stimuli.create({ content: "You feel fur" })
stimulus = touch.stimuli.create({ content: "You feel teeth" })
stimulus.add_detail("teeth", "THEY FEEL SO GURD")
room1.stimuli << stimulus

# WIDTH A LINK
room1.stimuli << smell.stimuli.create({ content: "You smell food" })
stimulus = smell.stimuli.create({ content: "You smell fear" })
stimulus.add_link("fear", "room2")
room1.stimuli << stimulus

room1.stimuli << magic.stimuli.create({ content: "This is a seed file" })
room1.stimuli << magic.stimuli.create({ content: "These are just seeds" })

room1.save

room2.stimuli << sight.stimuli.create({ content: "You see a box" })
room2.stimuli << sight.stimuli.create({ content: "You see a cloud" })

# WITH PUNCTUATION
room2.stimuli << sound.stimuli.create({ content: "You hear... a car" })
room2.stimuli << sound.stimuli.create({ content: "You hear a whistle" })

# WITH A DETAIL
room2.stimuli << taste.stimuli.create({ content: "You taste water" })
stimulus = taste.stimuli.create({ content: "You taste crackers" })
stimulus.add_detail("crackers", "THEY TASTE SO GURD")
room2.stimuli << stimulus

# WITH TWO LINKS
room2.stimuli << touch.stimuli.create({ content: "You feel uncomfortable" })
stimulus = touch.stimuli.create({ content: "You feel happy" })
stimulus.add_link("happy", "room1")
stimulus.add_link("you", "room1")
room2.stimuli << stimulus

room2.stimuli << smell.stimuli.create({ content: "You smell morning breath" })
room2.stimuli << smell.stimuli.create({ content: "You smell rain" })

room2.stimuli << magic.stimuli.create({ content: "Rails associations are fun" })
room2.stimuli << magic.stimuli.create({ content: "I love to prorgam" })

room2.save
