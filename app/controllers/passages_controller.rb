class PassagesController < ApplicationController
  respond_to :html, :json

  def show
    @passage = Passage.find(params[:id] || 1)
  end
end
