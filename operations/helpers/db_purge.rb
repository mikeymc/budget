module CLI
  class DbPurge < Thor
    desc 'test', 'Purge the test database'
    def test
      purge('test')
    end

    desc 'development', 'Purge the dev database'
    def development
      purge('development')
    end

    private

    def purge(environment)
      system "rake db:migrate:reset RAILS_ENV=#{environment}"
    end
  end
end
