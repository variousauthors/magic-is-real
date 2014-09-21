PASSAGE_NAME = /:: (.*)/
SENSE_LINE = /^(sight|touch|magic|sound|taste|smell)$/

desc "Parses the content files into seeds.yaml files"
task :prepare, [:twee, :yaml] do |task, args|
  # do the default args thing

  twee, yaml = args.to_a
  passages = []

  # open the yaml file for writing
  File.open(yaml, 'w') do |seeds|

    twine = File.open(twee)

    begin
      while (line = twine.readline.strip) do
        if line.match(PASSAGE_NAME)
          passages << process(line, twine)
        end
      end
    rescue EOFError
      # NOP we are done. PRORGAMMING BY EXCEPTION GOTO FTW
    rescue => e
      puts "#{ yaml }: #{ twine.lineno + 1 } -- #{ line }"
      raise e
    end

    seeds.write(passages.to_yaml)
  end

  # if the line starts with :: begin a new passage
  # if the line is just a sense word
  #   register the sense
  #   read lines until we hit a new sense or ::
  #   discard blank lines
  #   create a stimuli_attributes hash for each line with the registered sense

  # run db:setup
end

# should return a single passage hash
def process(line, twine)
  raise "Line was not a passage title." unless match = line.match(PASSAGE_NAME)

  passage = {}
  passage["name"] = match.captures.first
  stimuli = []
  current_sense = nil

  # do the senses
  twine.each_line do |line|
    break if line.match(PASSAGE_NAME)
    next if line.blank?
    
    if match = line.match(SENSE_LINE)
      current_sense = match.captures.first
      next
    end

    stimulus = {}
    stimulus["sense"] = current_sense
    stimulus["content"] = line.strip
    stimuli << stimulus
  end

  # rewind to that title
  twine.seek(-line.length, IO::SEEK_CUR)

  passage["stimuli_attributes"] = stimuli
  passage
end
