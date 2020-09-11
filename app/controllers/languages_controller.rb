class LanguagesController < ApplicationController
    # we set the language using a private method in case we are doing show
  before_action :set_language, only: [:show]

  def show
  end

  private

  def set_language
    @language = Language.find(params[:id])
  end
end
