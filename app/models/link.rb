class Link < ActiveRecord::Base
  belongs_to :passage
  belongs_to :stimulus

  def self.for_passage(id)
    joins(:stimulus).where(stimuli: { passage_id: id })
  end
end
