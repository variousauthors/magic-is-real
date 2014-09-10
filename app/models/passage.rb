class Passage < ActiveRecord::Base
  has_many :stimuli

  belongs_to :link
end
