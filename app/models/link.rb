class Link < ActiveRecord::Base
  belongs_to :passage
  belongs_to :stimulus
end
