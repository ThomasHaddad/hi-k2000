require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module HiK2000
  class Application < Rails::Application

    config.browserify_rails.commandline_options = "-t [ babelify --presets [ react es2015 ] ]"

  end
end
