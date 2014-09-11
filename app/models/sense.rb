class Sense < ActiveRecord::Base
  has_many :stimuli

  validates_uniqueness_of :name

  def self.map(key, value)
    Sense.select(key, value).inject({}) do |memo, sense|
      memo[sense[key]] = sense[value]
      memo
    end
  end
end
