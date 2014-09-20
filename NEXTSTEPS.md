NEXTSTEPS
---------

TODO: remove key from stimulus, or figure out why it is there

Narrative:

- want the game to start with a sight focused sequence
  where the other senses just provide noise
  - lots of smells, and sounds, but no links there
- after a few rooms, assume the player has turned off those
  senses, and start to add optional side rooms
- finally the narrative begins to require attention to
  other senses

a journey up a mountain
running away from home
sad child
cold nights
a plateaux, the remains of a log-fellow's hut
distractions, subtle beauty
echoes of footsteps that climbed here before
passing the impassable ("damn your eyes")
- a cold river, the smell of an old stone bridge
- fallen rocks that block the road, the sound of fabric flapping
mingi taw visible through the clouds


[x] passage
    - has many stimuli (scoped to senses)
    - belongs to many links!

[x] sense (should be six)
    - has many stimuli

[x] stimuli
    - content: text/html
    - has many passages through links
    - has many stimuli through details

[x] link
    - key: string

[x] detail
    - key: string

Example:

Room1

You can see [something|room2]. The sky is blue.
Everything smells like fire.
The dirt is {rough} between your toes.
  rough (magic): you remember Kalmykia.

Becomes

room1:
  name: room1
  sight:
    stimuli:
      - "You can see <a href='room2'>something</a>."
        passages: room2
      - "The sky is blue."

  smell:
    stimuli:
      - "Everything smells like fire."
  touch:
    stimuli
      - "The dirt is <a href='rough'>rough</a> betweeen your toes."
      - details: rough

and

stimuli:
  - magic
  - "you remember kalmykia"

Room names should be unique.
Details are created as stimuli in the context of the
particular passage.


Details should target senses. So if I click on a detail
from sight that targets sound, the new stimuli shows up in
sound.
