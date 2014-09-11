class Passage < ActiveRecord::Base
  has_many :stimuli
  has_many :links

  validates_uniqueness_of :name

  # by default links is showing incoming links, but we want to
  # show outgoing links
  def links
    Link.joins(:stimulus).where(stimuli: { passage_id: self.id })
  end
end
