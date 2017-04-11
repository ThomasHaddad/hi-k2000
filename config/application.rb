require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module HiK2000
  class Application < Rails::Application

    config.browserify_rails.commandline_options = "-t [ babelify --presets [ react es2015 ] ]"

    unless Rails.env.production?
        # Work around sprockets+teaspoon mismatch:
        Rails.application.config.assets.precompile += %w(spec_helper.js)
        # Make sure Browserify is triggered when
        # asked to serve javascript spec files
        config.browserify_rails.paths << lambda { |p|
            p.start_with?(Rails.root.join("spec/javascripts").to_s)
        }
    end

  end
end
