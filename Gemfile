source "https://rubygems.org"
ruby RUBY_VERSION

gem 'jekyll', '~> 4.0'
gem 'html-proofer', '~> 3.15', '>= 3.15.2'

group :jekyll_plugins do
  # gem 'jekyll-feed', '~> 0.13.0'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem 'tzinfo', '~> 2.0', '>= 2.0.2'
  gem 'tzinfo-data', '~> 1.2020', '>= 1.2020.1'
end
