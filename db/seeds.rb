

Language.delete_all

language = Language.new(name: "English", flag: "https://www.countryflags.io/us/shiny/32.png")
language.save

language = Language.new(name: "Français", flag: "https://www.countryflags.io/fr/shiny/32.png")
language.save

language = Language.new(name: "Português", flag: "https://www.countryflags.io/br/shiny/32.png")
language.save

language = Language.new(name: "Español", flag: "https://www.countryflags.io/es/shiny/32.png")
language.save
