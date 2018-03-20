class StyleguideController < ApplicationController
  def index
    get_components
  end

  def show
    get_components
    @component = params[:id]
  end

  private

  def get_components
    @components = Dir["app/assets/javascripts/components/*.jsx"]
    pattern = /app\/assets\/javascripts\/components\/(.*)\.js\.jsx/
    @components.map! {|f| f.scan(pattern).last.last}
  end
end
