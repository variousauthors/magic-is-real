NEXTSTEPS
---------

[ ] passage
    - has many stimuli (scoped to senses)

[ ] sense (should be six)
    - has many stimuli

[ ] stimuli
    - content: text/html
    - has many passages through links
    - has many stimuli through details

[ ] link
    - key: string

[ ] detail
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
