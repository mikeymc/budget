module CLI
  class Journeys < Thor
    desc 'test', 'Run journey tests'
    def test
      system 'rspec ./spec/journeys/*_test.rb'
    end
  end
end
