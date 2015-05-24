desc 'run the journey tests'
task :journeys do
  exec 'bundle exec rspec'
end
