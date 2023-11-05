export default defineI18nConfig(() => ({
  legacy: false,
  warnHtmlMessage: false,
  lazy: true,
  locale: 'en',
  messages: {
    en: {
      home: {
        welcome: 'Welcome.',
        intro: {
          introBackground:
            'Hi my name is <strong><i>Rob Arkesteijn</i></strong>, after gaining valuable life skills and experiences during my time in the Marines, I pursued a more theoretical path.',
          introPassion:
            'Driven by a passion for programming, I transitioned to the field of software development, where I have sharpened my skills & expertise to become a successfull <strong><i>Front End Developer</i></strong>.',
          introCurrent:
            'I am currently employed as Junior Front End Developer by the company: <strong><i>Harborn Digital</i></strong>.',
        },
        list: {
          aboutMe: 'About Me',
          home: 'Homepage',
          projects: 'Projects',
          skills: 'Skills',
        },
      },
      aboutMe: {
        title: 'Who am I?',
        carouselText: {
          pageOne:
            "My name is <strong><i>Rob Arkesteijn</i></strong> and I'm a <strong><i>Front End Developer</i></strong>. I began my journey as a developer back in April 2022, when I first started learning the basics of HTML and CSS.<br><br> Soon after, I delved into the world of JavaScript, starting with writing functions on Edabit to become familiar with the languages many methods. As I gained more knowledge, I wanted to put it to the test by creating my own projects. It was through these projects that I truly began to learn how to implement JavaScript in a website, and I discovered just how complex the code can become as the project grows larger and more intricate.<br><br> In January 2023, I took my learning to the next level by attending a bootcamp at SALT. During this program, I was exposed to a variety of development tools that allowed me to broaden my skills and ultimately develop my own Full Stack Application. But what drove me to start learning web development in the first place?",
          pageTwo:
            "In 2019, I finished high school and decided to travel alone to Southeast Asia. This was a big step for an 18-year-old, as it meant going out of my comfort zone and taking responsibility for whatever might happen.<br><br> Being far from home gave me the chance to think creatively about my future. While reading 'Can't Hurt Me' by David Goggins, I felt inspired to join the <strong><i>military</i></strong>.<br><br> I discovered that the most challenging military training in the Netherlands was to become a <strong><i>marine</i></strong>, and I wanted to see if I had what it takes. After a year of daily training, sometimes up to three times a day, and selection tests, I began the actual training.<br><br> Did I underestimate the challenge? Definitely. Did that stop me? Not for a second. After about five months of training, I graduated from being a third-class marine to a <strong><i>second-class marine </i></strong>.",
          pageThree:
            'After completing the first half of my marine training, I had to make a tough decision. Continuing would mean committing to at least four years of service, but for various reasons, I decided not to.<br><br> Despite this, I knew that the work ethic I had developed in the marines would serve me well in whatever I did next. That next thing turned out to be studying <strong><i>Applied Mathematics</i></strong> at the <strong><i>The Hague University of Applied Sciences</i></strong>.<br><br> However, I quickly noticed a big difference between the university and the marines: discipline. Many students were distracted in class, on their phones, chatting, and being late. Initially, I tried to ignore it, but as time went on, I found myself being influenced by the negative energy around me.<br><br> After seven months, I left the university and focused on <strong><i>programming</i></strong>, which was what I enjoyed most during my time at the university.',
        },
      },
      skills: {
        title: 'The skills I master.',
      },
      projects: {
        title: 'Projects',
        selectProject: 'Please select a project..',
        portfolio:
          'Welcome to my digital showcase, where I proudly present my very own portfolio website as one of my most cherished creations. This website is not just a reflection of my skills and creativity; it embodies the essence of my passion for design and development.',
        nxtdes:
          "NXTDES (Next Destination) is a travel blog that displays all the places I've travelled to over the past four years. On this website I give lots of information about what best ways to travel to a certain location is, or what places you should visit when going there. There is also some standard information about how to travel in general. But now it is being updated to be more than just some information on a screen. An entire new user experience is being added. Find out what features I am referring to, by clicking on the link below! (Currently working for mobile)",
        innosysdelftbv:
          "InnoSys Delft BV is the company for development, production and integration of innovative and sustainable power electronics systems. InnoSys Delft BV boasts a wealth of knowledge and experience in the realm of power electronics. It's proficiency covers a wide spectrum of applications, from renewable energy solutions to advanced motor drives.",
        harborndigital:
          "We are Harborn, a digital agency that drives strategic growth by connecting valuable data, simplifying complexity, and focusing on human interaction. We build fully integrated digital ecosystems. Future-proof solutions that enhance people's lives. We assist our clients in anticipating and adapting to new ways of working in a rapidly changing world. Always centered on the human experience.",
      },
      footer: {
        email: 'Send me an e-mail',
        linkedin: 'Check my LinkedIn profile',
        github: 'Check my Github profile',
      },
      meta: {
        home: {
          title: 'Homepage',
          description:
            "Rob Arkesteijn's personal website. Where he shares his passion for software development. A showcase of his projects, skills, and experience.",
        },
        about: {
          title: 'About Me',
          description:
            'Discover what drives me to create and innovate. Explore my journey and the experiences that have shaped my creative path.',
        },
        skills: {
          title: 'Skills',
          description:
            'Discover my skills, expertise, and proficiency. Learn more about my abilities and how I use them to realize my creative vision.',
        },
        projects: {
          title: 'Projects',
          description:
            'Explore my portfolio of projects and creative achievements. Explore the outcomes of my efforts in various projects and sectors.',
        },
      },
    },
    nl: {
      home: {
        welcome: 'Welkom.',
        intro: {
          introBackground:
            'Hallo mijn naam is <strong><i>Rob Arkesteijn</i></strong>, na het opdoen van waardevolle levensvaardigheden en ervaringen tijdens mijn tijd bij de marine, ben ik een meer theoretisch pad ingeslagen.',
          introPassion:
            'Gedreven door mijn passie voor programmeren ben ik software gaan ontwikkelen, waar ik mijn vaardigheden en expertise heb aangescherpt om een succesvolle <strong><i>Front End Developer</i></strong> te worden.',
          introCurrent:
            'Ik werk momenteel als Junior Front End Developer bij het bedrijf: <strong><i>Harborn Digital</i></strong>.',
        },
        list: {
          aboutMe: 'Over mij',
          home: 'Homepagina',
          projects: 'Projecten',
          skills: 'Vaardigheden',
        },
      },
      aboutMe: {
        title: 'Wie ben ik?',
        carouselText: {
          pageOne:
            'Mijn naam is <strong><i>Rob Arkesteijn</i></strong> en ik ben een <strong><i>Front-end ontwikkelaar</i></strong>. Mijn reis als ontwikkelaar begon in april 2022, toen ik voor het eerst de basis van HTML en CSS begon te leren.<br><br> Niet lang daarna dook ik in de wereld van JavaScript, te beginnen met het schrijven van functies op Edabit om vertrouwd te raken met de vele methoden van de taal. Naarmate ik meer kennis opdeed, wilde ik deze kennis testen door mijn eigen projecten te maken. Het was door middel van deze projecten dat ik echt begon te leren hoe je JavaScript kunt implementeren in een website, en ik ontdekte hoe complex de code kan worden naarmate het project groter en ingewikkelder wordt.<br><br> In januari 2023 heb ik mijn leerproces naar een hoger niveau getild door deel te nemen aan een bootcamp bij SALT. Tijdens dit programma werd ik blootgesteld aan verschillende ontwikkelingstools waarmee ik mijn vaardigheden kon verbreden en uiteindelijk mijn eigen full-stack applicatie kon ontwikkelen. Maar wat dreef me eigenlijk om webontwikkeling te leren in de eerste plaats?',
          pageTwo:
            "In 2019 rondde ik de middelbare school af en besloot ik alleen naar Zuidoost-Azië te reizen. Dit was een grote stap voor een 18-jarige, omdat het betekende dat ik uit mijn comfortzone stapte en verantwoordelijkheid nam voor wat er ook zou kunnen gebeuren.<br><br> Ver weg van huis kreeg ik de kans om creatief na te denken over mijn toekomst. Terwijl ik 'Can't Hurt Me' van David Goggins las, voelde ik me geïnspireerd om me bij het <strong><i>leger</i></strong> aan te sluiten.<br><br> Ik ontdekte dat de meest uitdagende militaire training in Nederland was om een <strong><i>marinier</i></strong> te worden, en ik wilde zien of ik het in me had. Na een jaar dagelijkse training, soms wel tot drie keer per dag, en selectietests begon ik aan de daadwerkelijke training.<br><br> Heb ik de uitdaging onderschat? Absoluut. Heeft dat me tegengehouden? Geen seconde. Na ongeveer vijf maanden training ben ik gepromoveerd van een derdeklas marinier naar een <strong><i>tweedeklas marinier</i></strong>.",
          pageThree:
            'Na het voltooien van de eerste helft van mijn marinetraining moest ik een moeilijke beslissing nemen. Doorgaan zou betekenen dat ik me minstens vier jaar moest verbinden, maar om verschillende redenen besloot ik dat niet te doen.<br><br> Ondanks dat wist ik dat de arbeidsethiek die ik had ontwikkeld in de mariniers me goed van pas zou komen in wat ik hierna zou doen. Dat bleek te zijn het studeren van <strong><i>Toegepaste Wiskunde</i></strong> aan de <strong><i>Haagse Hogeschool</i></strong>.<br><br> Echter, ik merkte al snel een groot verschil tussen de universiteit en de mariniers: discipline. Veel studenten waren afgeleid in de les, bezig met hun telefoon, aan het kletsen en te laat komen. In eerste instantie probeerde ik het te negeren, maar na verloop van tijd merkte ik dat ik werd beïnvloed door de negatieve energie om me heen.<br><br> Na zeven maanden verliet ik de universiteit en richtte me op <strong><i>programmeren</i></strong>, wat hetgene was waar ik het meest van genoot tijdens mijn tijd aan de universiteit.',
        },
      },
      skills: {
        title: 'De vaardigheden die ik beheers.',
      },
      projects: {
        title: 'Projecten',
        selectProject: 'Selecteer a.u.b. een project..',
        portfolio:
          'Welkom bij mijn digitale showcase, waar ik met trots mijn eigen portfolio website presenteer als een van mijn meest gekoesterde creaties. Deze website is niet slechts een weerspiegeling van mijn vaardigheden en creativiteit; het belichaamt de essentie van mijn passie voor ontwerp en ontwikkeling.',
        nxtdes:
          'NXTDES (Next Destination) is een reisblog die alle plaatsen toont waar ik de afgelopen vier jaar naartoe gereisd ben. Op deze website geef ik veel informatie over de beste manieren om naar een bepaalde locatie te reizen, of welke plaatsen je moet bezoeken als je daarheen gaat. Er is ook wat standaardinformatie over hoe je in het algemeen kunt reizen. Maar nu wordt het bijgewerkt om meer te zijn dan alleen wat informatie op een scherm. Er wordt een geheel nieuwe gebruikerservaring toegevoegd. Ontdek welke functies ik bedoel door op de onderstaande link te klikken! (Momenteel werkzaam voor mobiel)',
        innosysdelftbv:
          'InnoSys Delft BV is het bedrijf voor de ontwikkeling, productie en integratie van innovatieve en duurzame energiesystemen. InnoSys Delft BV beschikt over een schat aan kennis en ervaring op het gebied van energie-elektronica. Haar deskundigheid bestrijkt een breed scala aan toepassingen, van oplossingen voor hernieuwbare energie tot geavanceerde aandrijfsystemen.',
        harborndigital:
          'Wij zijn Harborn, een digitaal bureau dat strategische groei stimuleert door waardevolle data te verbinden, complexiteit te vereenvoudigen en te focussen op menselijke interactie. Wij bouwen volledig geïntegreerde digitale ecosystemen. Toekomstbestendige oplossingen die het leven van mensen verbeteren. We helpen onze klanten te anticiperen op en zich aan te passen aan nieuwe manieren van werken in een wereld die snel verandert. Altijd gericht op de menselijke ervaring.',
      },
      footer: {
        email: 'Stuur mij een e-mail',
        linkedin: 'Zie mijn LinkedIn profiel',
        github: 'Zie mijn Github profiel',
      },
      meta: {
        home: {
          title: 'Homepagina',
          description:
            'De persoonlijke website van Rob Arkesteijn. Hier deelt hij zijn passie voor softwareontwikkeling. Een etalage van zijn projecten, vaardigheden en ervaring.',
        },
        about: {
          title: 'Over Mij',
          description:
            'Ontdek wat mij drijft om te creëren en innoveren. Verken mijn reis en de ervaringen die mijn creatieve pad hebben gevormd.',
        },
        skills: {
          title: 'Vaardigheden',
          description:
            'Ontdek mijn vaardigheden en expertise. Leer meer over mijn bekwaamheden en hoe ik deze inzet om mijn creatieve visie te realiseren.',
        },
        projects: {
          title: 'Projecten',
          description:
            'Bekijk mijn portfolio van projecten en creatieve prestaties. Verken de resultaten van mijn inspanningen in verschillende projecten en sectoren.',
        },
      },
    },
  },
}));
