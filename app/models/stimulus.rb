class Stimulus < ActiveRecord::Base
  belongs_to :passage
  belongs_to :sense

  belongs_to :detail

  has_many :links
  has_many :details

  def add_link(key, name)
    passage = Passage.where(name: name).first

    self.links << Link.create({ key: key, passage: passage })
  end

  def add_detail(key, content)
    stimulus = self.sense.stimuli.create({ content: content })

    self.details << Detail.create({ key: key, stimulus: stimulus })
  end
end
