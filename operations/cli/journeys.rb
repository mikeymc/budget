module CLI
  class Journeys < Thor
    desc 'test', 'Run journey tests'
    def test
      system 'rspec ./spec/journeys/*_spec.rb'
    end
  end
end
