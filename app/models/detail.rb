class Detail < ActiveRecord::Base
  has_one :stimulus
  belongs_to :stimulus
end
