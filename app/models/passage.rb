class Passage < ActiveRecord::Base
  has_many :stimuli
  has_many :links

  validates_uniqueness_of :name

  # by default links is showing incoming links, but we want to
  # show outgoing links
  def links
    Link.for_passage(self.id)
  end

  def senses_for(*names)
    stimuli.joins(:sense).where(senses: { name: names })
  end

  def senses
    name_id_pairs = Sense.map(:id, :name)

    senses_for(name_id_pairs.values).group_by do |stimulus|
      name_id_pairs[stimulus.sense_id]
    end
  end
end
