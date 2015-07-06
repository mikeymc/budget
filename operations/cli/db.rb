require_relative '../helpers/db_purge'

module CLI
  class Db < Thor
    desc 'purge', 'Purge subcommands'
    subcommand "purge", CLI::DbPurge
  end
end
