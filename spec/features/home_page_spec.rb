require 'rails_helper'

RSpec.feature 'Home Page' do
  # As a user
  # I should be able to visit Home Page

  background do
    visit '/'
  end

  scenario 'see Hello World' do
    should_see 'Hello World!'
  end

  # scenario 'can increment counter' do
  #   clicks = find('.num_clicks').text.strip.to_i
  #
  #   find('.my-counter').click
  #   should_see "#{clicks+1}"
  # end
end
