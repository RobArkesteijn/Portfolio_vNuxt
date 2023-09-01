export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      home: {
        welcome: 'Welcome.',
        intro: {
          introBackground:
            'Hi my name is Rob Arkesteijn, after gaining valuable life skills and experiences during my time in the Marines, I pursued a more theoretical path.',
          introPassion:
            'Driven by a passion for programming, I transitioned to the field of software development, where I have sharpened my skills & expertise to become a successfull Front End Developer.',
          introCurrent:
            'I am currently employed as Junior Front End Developer by the company: Harborn Digital',
        },
        list: {
          aboutMe: 'About Me',
          skills: 'Skills',
          experiences: 'Experiences',
          projects: 'Projects',
        },
      },
    },
    nl: {
      home: {
        welcome: 'Welkom.',
        intro: {
          introBackground:
            'Hallo mijn naam is Rob Arkesteijn, na het opdoen van waardevolle levensvaardigheden en ervaringen tijdens mijn tijd bij de marine, ben ik een meer theoretisch pad ingeslagen.',
          introPassion:
            'Gedreven door mijn passie voor programmeren ben ik software gaan ontwikkelen, waar ik mijn vaardigheden en expertise heb aangescherpt om een succesvolle Front End Developer te worden.',
          introCurrent:
            'Ik werk momenteel als Junior Front End Developer bij het bedrijf: Harborn Digital.',
        },
        list: {
          aboutMe: 'Over mij',
          skills: 'Vaardigheden',
          experiences: 'Ervaringen',
          projects: 'Projecten',
        },
      },
    },
  },
}));
