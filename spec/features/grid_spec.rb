require 'rails_helper'

RSpec.feature 'Tasks Grid' do
  # As a user
  # I should be able to use Tasks Grid

  background do
    visit '/'
  end

  scenario 'sees the grid with rows' do
    should_see 'code katas'
    should_see 'read POODR'
    should_see '2 of 2'
  end

  scenario 'opens info dialog and closes it' do
    # view info
    find('.gridRow', text: 'read POODR').click
    should_see 'one chapter a day'

    # close info
    find('.dialogCloseBtn').click
    should_not_see 'one chapter a day'
  end
end
