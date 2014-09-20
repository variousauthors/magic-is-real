class Stimulus < ActiveRecord::Base
  include StimulusHelper

  belongs_to :passage
  belongs_to :sense

  belongs_to :detail

  has_many :links
  has_many :details

  accepts_nested_attributes_for :links

  # ensure that the given key exists in the content
  def add_link(key, name)
    passage = Passage.where(name: name).first

    self.links << Link.create({ key: key, passage: passage })
  end

  def add_detail(key, content)
    stimulus = self.sense.stimuli.create({ content: content })

    self.details << Detail.create({ key: key, stimulus: stimulus })
  end

  def for_sense(name)
    self.sense = Sense.where(name: name).first
    self.save
  end

end
