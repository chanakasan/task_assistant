require 'spec_helper'
require 'capybara/rspec'

Dir["#{File.dirname(__FILE__)}/support/*.rb"].each { |f| require f }

Capybara.register_driver :selenium_chrome do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

Capybara.default_driver = :selenium_chrome
Capybara.javascript_driver = :selenium_chrome
Capybara.app_host = 'http://localhost:9000'
