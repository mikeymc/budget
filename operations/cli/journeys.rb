module CLI
  class Journeys < Thor
    desc 'test', 'Run journey tests'
    def test
      Dir.chdir('/Users/Mikey/workspace/budget/spec/') do
        system 'rspec ./journeys/*_test.rb'
      end
    end
  end
end
