require 'fileutils'

namespace :templates do
  desc 'complile'
  task :compile do
    Dir.chdir('app/views/templates') do
      templates.each do |template|
        compile(template)
      end
    end
  end
end

def self.templates
  Dir['*']
end

def self.compile(template)
  nghtml2js = '../../../node_modules/ng-html2js/bin/ng-html2js'
  options = '--module templates --module-var budget'

  thing = "#{nghtml2js} #{template} #{compiled_template_path(template)} #{options}"
  puts thing
  exec thing
end

def self.compiled_template_path(template)
  output_directory = '../../assets/javascripts/angular-app/templates'
  template_basename = File.basename(template, '.*')
  FileUtils::mkdir_p output_directory

  "#{output_directory}/#{template_basename}.js"
end
