require 'jekyll'
require 'html-proofer'

load '_rake-configuration.rb' if File.exist?('_rake-configuration.rb')


task :build, [:deployment_configuration] do |t, args|
  args.with_defaults(:deployment_configuration => 'deploy')
  config_file = "_config_#{args[:deployment_configuration]}.yml"

  Jekyll::Commands::Build.process({})
  # jekyll("build --config _config.yml,#{config_file}")
end

task :test do
  # sh "bundle exec jekyll build"
  options = { :assume_extension => true, :disable_external => true }
  HTMLProofer.check_directory("./_site", options).run
end
