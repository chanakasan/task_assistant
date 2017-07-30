module WebUserHelper
  def wait(seconds=1)
    sleep(seconds)
  end

  def should_see(text)
    expect(page).to have_content(text)
  end

  def should_not_see(text)
    expect(page).to_not have_content(text)
  end

  def accept_js_confirm_dialog
    page.driver.browser.switch_to.alert.accept
  end

  def submit_form
    find('input[name="commit"]').click
  end
end

RSpec.configure do |config|
  config.include WebUserHelper, type: :feature
end
