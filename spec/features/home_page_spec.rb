require 'rails_helper'

RSpec.feature 'Home Page' do
  # As a user
  # I should be able to visit Home Page

  scenario 'see Hello World' do
    visit '/'
    should_see 'Hello World!'
  end
end
