class PassagesController < ApplicationController
  respond_to :html, :json

  def show
    @senses = Passage.find(params[:id] || 1).senses
  end
end
