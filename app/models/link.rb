class Link < ActiveRecord::Base
  has_one :passage
  belongs_to :stimulus
end
