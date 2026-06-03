export type Lang = "de" | "en" | "bg";

export const LANGS: Lang[] = ["de", "en", "bg"];

export const LANG_LABELS: Record<Lang, string> = {
  de: "DE",
  en: "EN",
  bg: "BG",
};

type S = Record<Lang, string>;

export const tx = {
  nav: {
    start: { de: "Start", en: "Home", bg: "Nachalo" } as S,
    about: { de: "Über mich", en: "About", bg: "Za men" } as S,
    services: { de: "Leistungen", en: "Services", bg: "Uslugi" } as S,
    projects: { de: "Projekte", en: "Projects", bg: "Proekti" } as S,
    references: { de: "Referenzen", en: "References", bg: "Referentsii" } as S,
    domains: { de: "Fachgebiete", en: "Expertise", bg: "Oblasti" } as S,
    faq: { de: "FAQ", en: "FAQ", bg: "ChZV" } as S,
    contact: { de: "Kontakt", en: "Contact", bg: "Kontakt" } as S,
    skip: { de: "Zum Inhalt springen", en: "Skip to content", bg: "Kam sadarzhanieto" } as S,
    langAria: {
      de: "Sprache wechseln, aktuell Deutsch",
      en: "Change language, currently English",
      bg: "Smyana na ezika, tekushto balgarski",
    } as S,
  },
  hero: {
    badge: { de: "KI-Berater · Dozent", en: "AI Consultant · Lecturer", bg: "AI konsultant · prepodavatel" } as S,
    titleParts: {
      de: ["Künstliche", "Intelligenz,", "anwendbar", "gemacht."],
      en: ["Artificial", "intelligence,", "made", "applicable."],
      bg: ["Izkustveniyat", "intelekt —", "prilozhen", "na praktika."],
    } as Record<Lang, string[]>,
    titleAccentIdx: [2, 3],
    lead: {
      de: "Beratung, Schulung und Umsetzung für Unternehmen.",
      en: "Consulting, training, and implementation for companies.",
      bg: "Konsultatsii, obuchenie i realizatsiya za biznesa.",
    } as S,
    ctaPrimary: { de: "Kontakt aufnehmen", en: "Get in touch", bg: "Svarzhete se" } as S,
    ctaSecondary: { de: "Leistungen ansehen", en: "View services", bg: "Vizh uslugite" } as S,
  },
  logoStrip: {
    label: { de: "Tätig für", en: "Working with", bg: "Rabotya za" } as S,
    areas: {
      de: ["Fachhochschule", "HTL", "Industrie", "Versicherung", "Tech-Community"],
      en: ["University of Applied Sciences", "HTL", "Industry", "Insurance", "Tech Community"],
      bg: ["Visshe uchilishte", "HTL", "Industriya", "Zastrahovane", "Tech obshtnost"],
    } as Record<Lang, string[]>,
  },
  about: {
    badge: { de: "Über mich", en: "About", bg: "Za men" } as S,
    titleStart: { de: "Akademisch fundiert.", en: "Academically grounded.", bg: "Akademichno obosnovano." } as S,
    titleAccent: {
      de: "Praktisch anwendbar.",
      en: "Practically applicable.",
      bg: "Prakticheski prilozhimo.",
    } as S,
    para1: {
      de: "Ich bin Dozent an einer Fachhochschule und Professor an einer HTL. Meine Arbeit verbindet komplexe Mathematik mit moderner künstlicher Intelligenz — akademisch fundiert, praktisch anwendbar.",
      en: "I'm a lecturer at a university of applied sciences and a professor at an HTL. My work combines complex mathematics with modern AI — academically grounded, practically applicable.",
      bg: "Prepodavatel sam vav visshe uchilishte i profesor v HTL. Rabotata mi sachetava slozhna matematika sas savremenen AI — akademichno obosnovano, prakticheski prilozhimo.",
    } as S,
    para2: {
      de: "In über zehn Jahren Lehre habe ich mehr als 50 Diplom- und Abschlussprojekte fachlich begleitet — von der Themenfindung über die methodische Tiefe bis zur Verteidigung.",
      en: "In over ten years of teaching I've supervised more than 50 thesis and diploma projects — from topic selection through methodology to final defense.",
      bg: "Za nad deset godini prepodavane sam rakovodil poveche ot 50 diplomni i magistarski proekta — ot temata prez metodologiyata do zashtitata.",
    } as S,
    para3: {
      de: "Für Unternehmen bin ich Berater, Sparringspartner und Umsetzer: Ich helfe dabei, KI-Projekte nicht beim Proof-of-Concept enden zu lassen, sondern in produktive, messbare Lösungen zu überführen.",
      en: "For companies I'm a consultant, sparring partner, and implementer: I help AI projects move beyond proof-of-concept into productive, measurable solutions.",
      bg: "Za kompaniite sam konsultant, sparring partnyor i izpalnitel: pomagam na AI proektite da ne priklyuchvat s proof-of-concept, a da se prevarnat v produktivni, izmerimi resheniya.",
    } as S,
    para3Mobile: {
      de: "Für Unternehmen Berater und Umsetzer — KI-Projekte bis zur produktiven Lösung führen.",
      en: "Consultant and implementer for companies — guiding AI projects to production.",
      bg: "Konsultant i izpalnitel za biznesa — vodya AI proekti do produktsiya.",
    } as S,
    approach: [
      { de: "Use Case schärfen", en: "Sharpen the use case", bg: "Izostryane na use case" } as S,
      { de: "Architektur etablieren", en: "Establish the architecture", bg: "Izgrazhdane na arhitektura" } as S,
      { de: "Transfer & Enablement", en: "Transfer & enablement", bg: "Transfer i obuchenie" } as S,
    ],
    stats: [
      { de: "B2B-Integrationen", en: "B2B integrations", bg: "B2B integratsii" } as S,
      { de: "Prozessbeschleunigung", en: "Process acceleration", bg: "Uskoryavane na protsesi" } as S,
      { de: "Jahre Lehrerfahrung", en: "years teaching experience", bg: "godini prepodavatelski opit" } as S,
      { de: "DSGVO-konform", en: "GDPR-compliant", bg: "GDPR savmestimo" } as S,
    ],
    cta: { de: "Kontakt aufnehmen", en: "Get in touch", bg: "Svarzhete se" } as S,
    portraitCaption: {
      de: "KI-Beratung · Lehre · Umsetzung",
      en: "AI Consulting · Teaching · Implementation",
      bg: "AI konsultatsii · prepodavane · realizatsiya",
    } as S,
  },
  services: {
    badge: { de: "Leistungen", en: "Services", bg: "Uslugi" } as S,
    titleStart: { de: "Wie ich Unternehmen", en: "How I support", bg: "Kak podpomagam" } as S,
    titleAccent: { de: "unterstütze", en: "companies", bg: "kompaniite" } as S,
    lead: {
      de: "Von der ersten Einschätzung bis zur produktiven Anwendung: Die Arbeit ist auf Klarheit, technische Substanz und Transfer in den Alltag ausgelegt.",
      en: "From initial assessment to production: the work focuses on clarity, technical substance, and real-world transfer.",
      bg: "Ot parvonachalna otsenka do produktsiya: rabotata e nasochena kam yasnota, tehnicheska dalbochina i transfer v praktikata.",
    } as S,
    leadMobile: {
      de: "Von der ersten Einschätzung bis zur produktiven Lösung.",
      en: "From first assessment to production-ready solution.",
      bg: "Ot otsenka do gotovo za produktsiya reshenie.",
    } as S,
    items: [
      {
        label: { de: "Automation", en: "Automation", bg: "Avtomatizatsiya" } as S,
        title: {
          de: "Prozessautomatisierung mit KI-Agents",
          en: "Process automation with AI agents",
          bg: "Avtomatizatsiya na protsesi s AI agenti",
        } as S,
        text: {
          de: "Analyse, Konzeption und Umsetzung vollautomatisierter Geschäftsprozesse. Wir identifizieren wiederkehrende Aufgaben, modellieren Agenten-Workflows und integrieren sie in Ihre Systemlandschaft.",
          en: "Analysis, design, and implementation of fully automated business processes. We identify recurring tasks, model agent workflows, and integrate them into your system landscape.",
          bg: "Analiz, dizayn i realizatsiya na napalno avtomatizirani biznes protsesi. Identifitsirame povtaryashti se zadachi, modelirame agentski workflow i gi integrirame v sistemite Vi.",
        } as S,
        short: {
          de: "Wiederkehrende Aufgaben durch mehrstufige KI-Agents automatisieren — von der Analyse bis zur Integration.",
          en: "Automate recurring tasks via multi-step AI agents — from analysis to integration.",
          bg: "Avtomatizirane na zadachi s mnogoetapni AI agenti — ot analiz do integratsiya.",
        } as S,
        features: {
          de: [
            "Identifikation automatisierbarer Prozesse",
            "Mehrstufige Agenten-Workflows mit klaren Übergaben",
            "Integration in bestehende ERP- und CRM-Systeme",
            "Monitoring, Logging und Failover-Strategien",
          ],
          en: [
            "Identifying automatable processes",
            "Multi-step agent workflows with clear handoffs",
            "Integration into existing ERP and CRM systems",
            "Monitoring, logging, and failover strategies",
          ],
          bg: [
            "Identifikatsiya na protsesi za avtomatizatsiya",
            "Mnogoetapni agentski workflow",
            "Integratsiya v ERP i CRM sistemi",
            "Monitoring, logvane i failover strategii",
          ],
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "Custom AI", en: "Custom AI", bg: "Custom AI" } as S,
        title: {
          de: "Maßgeschneiderte KI-Lösungen & RAG-Systeme",
          en: "Custom AI solutions & RAG systems",
          bg: "Custom AI resheniya i RAG sistemi",
        } as S,
        text: {
          de: "Individuelle KI-Applikationen — von der Retrieval-Augmented-Generation-Architektur über Vektor-Datenbanken bis zur produktiven Bereitstellung. Sicher, dokumentiert, wartbar.",
          en: "Tailored AI applications — from RAG architecture and vector databases to production deployment. Secure, documented, maintainable.",
          bg: "Individualni AI prilozheniya — ot RAG arhitektura i vektorni bazi do produktivna realizatsiya. Sigurno, dokumentirano, podarzhimo.",
        } as S,
        short: {
          de: "Eigene RAG-Systeme auf Ihren Daten: vom Prototyp bis zur sicheren Bereitstellung.",
          en: "Your own RAG systems on your data: from prototype to secure deployment.",
          bg: "Sobstveni RAG sistemi na Vashite danni: ot prototip do sigurna realizatsiya.",
        } as S,
        features: {
          de: [
            "Retrieval-Augmented Generation auf eigenen Daten",
            "Vektor-Datenbank-Auswahl und -Integration",
            "Evaluation, Guardrails und Prompt-Strategien",
            "Sichere Bereitstellung in der eigenen Infrastruktur",
          ],
          en: [
            "Retrieval-Augmented Generation on your own data",
            "Vector database selection and integration",
            "Evaluation, guardrails, and prompt strategies",
            "Secure deployment in your own infrastructure",
          ],
          bg: [
            "Retrieval-Augmented Generation varhu Vashi danni",
            "Izbor i integratsiya na vektorna baza",
            "Eval, guardrails i prompt strategii",
            "Sigurna realizatsiya vav Vasha infrastruktura",
          ],
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "Enablement", en: "Enablement", bg: "Obuchenie" } as S,
        title: {
          de: "Schulungen zu Künstlicher Intelligenz",
          en: "Training on artificial intelligence",
          bg: "Obucheniya po izkustven intelekt",
        } as S,
        text: {
          de: "Praxisnahe Workshops für Fach- und Führungskräfte. Von den Grundlagen über Prompt Engineering bis zur strategischen Einordnung von KI im Unternehmen.",
          en: "Hands-on workshops for specialists and executives. From fundamentals and prompt engineering to strategic positioning of AI in the company.",
          bg: "Prakticheski warkshopi za spetsialisti i rakovoditeli. Ot osnovi i prompt engineering do strategichesko pozitsionirane na AI.",
        } as S,
        short: {
          de: "Praxisnahe KI-Workshops für Fach- und Führungskräfte — Grundlagen bis Strategie.",
          en: "Hands-on AI workshops for specialists and executives — fundamentals to strategy.",
          bg: "Prakticheski AI warkshopi — ot osnovi do strategiya.",
        } as S,
        features: {
          de: [
            "Grundlagen-Sessions für gemischte Teams",
            "Prompt Engineering mit echten Use Cases",
            "Strategische Einordnung von KI im Unternehmen",
            "Hands-on Übungen statt Folien-Schlachten",
          ],
          en: [
            "Foundations sessions for mixed teams",
            "Prompt engineering with real use cases",
            "Strategic positioning of AI in the company",
            "Hands-on exercises, not slide battles",
          ],
          bg: [
            "Osnovni sesii za smeseni ekipi",
            "Prompt engineering s realni use cases",
            "Strategichesko pozitsionirane na AI",
            "Hands-on uprazhneniya, ne samo slaydove",
          ],
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "Workflow", en: "Workflow", bg: "Workflow" } as S,
        title: {
          de: "Schulungen zur Prozessautomatisierung mit n8n",
          en: "Training on process automation with n8n",
          bg: "Obucheniya po protsesna avtomatizatsiya s n8n",
        } as S,
        text: {
          de: "Automatisierung von Datenpipelines und Geschäftsprozessen mit n8n. Hands-on, mit eigenen Use Cases und konkreten Beispielen aus der Teilnehmerpraxis.",
          en: "Data pipeline and business process automation with n8n. Hands-on, with real participant use cases and concrete examples.",
          bg: "Avtomatizatsiya na data pipeline i biznes protsesi s n8n. Hands-on s realni use cases na uchastnitsite.",
        } as S,
        short: {
          de: "n8n-Schulungen für Datenpipelines und Automatisierung — hands-on mit echten Use Cases.",
          en: "n8n training for data pipelines and automation — hands-on with real use cases.",
          bg: "n8n obucheniya za data pipeline i avtomatizatsiya — hands-on.",
        } as S,
        features: {
          de: [
            "n8n-Grundlagen und Architektur-Konzepte",
            "Eigene Workflows live im Workshop bauen",
            "Anbindung von APIs, Datenbanken und LLMs",
            "Self-hosting versus Cloud — Entscheidungshilfen",
          ],
          en: [
            "n8n fundamentals and architecture concepts",
            "Build your own workflows live in the workshop",
            "Integrating APIs, databases, and LLMs",
            "Self-hosting vs. cloud — decision guidance",
          ],
          bg: [
            "Osnovi na n8n i arhitektura",
            "Izgrazhdane na sobstveni workflow na warkshop",
            "Integratsiya na API, BD i LLM",
            "Self-host vs cloud — nasoki za reshenie",
          ],
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "Begleitung", en: "Advisory", bg: "Mentorstvo" } as S,
        title: {
          de: "Individuelle Beratung & Projektbegleitung",
          en: "Individual consulting & project supervision",
          bg: "Individualni konsultatsii i mentorstvo",
        } as S,
        text: {
          de: "Maßgeschneiderte Beratung über die gesamte Projektdauer — vom Erstgespräch über Architektur-Reviews bis zur begleitenden Umsetzung. Auch als externer Sparringspartner für interne Teams.",
          en: "Tailored consulting across the entire project — from kickoff through architecture reviews to implementation. Also available as external sparring partner for internal teams.",
          bg: "Individualni konsultatsii prez tseliya proekt — ot nachalen razgovor prez arhitekturni pregledi do realizatsiya. Sashto kato vanshen sparring partnyor za vatreshni ekipi.",
        } as S,
        short: {
          de: "Beratung & Sparring über die gesamte Projektlaufzeit — auch als externer Reviewer.",
          en: "Consulting & sparring across the full project — also as external reviewer.",
          bg: "Konsultatsii i sparring prez tseliya proekt — sashto kato vanshen revyuar.",
        } as S,
        features: {
          de: [
            "Architektur-Reviews und Sparring",
            "Externe Zweitmeinung für interne Teams",
            "Begleitung über die gesamte Projektlaufzeit",
            "Klare Empfehlungen statt Buzzword-Bingo",
          ],
          en: [
            "Architecture reviews and sparring",
            "External second opinion for internal teams",
            "Support across the entire project lifecycle",
            "Clear recommendations, no buzzword bingo",
          ],
          bg: [
            "Arhitekturni pregledi i sparring",
            "Vanshno vtoro mnenie za vatreshni ekipi",
            "Podkrepa prez tseliya zhiznen tsikal",
            "Yasni preporaki, bez buzzword bingo",
          ],
        } as Record<Lang, string[]>,
      },
    ],
    showLabel: { de: "Leistung", en: "Service", bg: "Usluga" } as S,
  },
  showcase: {
    badge: { de: "Projekte", en: "Projects", bg: "Proekti" } as S,
    titleStart: { de: "Ausgewählte", en: "Selected", bg: "Izbrani" } as S,
    titleAccent: { de: "Arbeiten", en: "Work", bg: "proekti" } as S,
    lead: {
      de: "Ein Auszug aus Beratungs- und Umsetzungsprojekten der letzten Jahre — von RAG-Systemen über Agenten-Workflows bis zu Lehr- und Strategie-Formaten.",
      en: "A selection of consulting and implementation projects from recent years — from RAG systems and agent workflows to teaching and strategy formats.",
      bg: "Podbor ot konsultantski i realizatsionni proekti ot poslednite godini — RAG sistemi, agentski workflow, obucheniya i strategicheski formati.",
    } as S,
    leadMobile: {
      de: "Auszug aktueller Projekte — RAG, Agenten und Workshops.",
      en: "Recent projects — RAG, agents, and workshops.",
      bg: "Skoroshni proekti — RAG, agenti, warkshopi.",
    } as S,
    items: [
      {
        title: { de: "RAG-Assistenz für Versicherer", en: "RAG assistant for insurers", bg: "RAG asistent za zastrahovateli" } as S,
        description: {
          de: "Wissensdatenbank mit Retrieval-Augmented Generation für interne Sachbearbeitung.",
          en: "Knowledge base with Retrieval-Augmented Generation for internal case handling.",
          bg: "Baza ot znaniya s RAG za vatreshna obrabotka.",
        } as S,
      },
      {
        title: { de: "Agenten-Workflow für Industrie", en: "Agent workflow for industry", bg: "Agentski workflow za industriyata" } as S,
        description: {
          de: "Automatisierte Angebotsprüfung und Rückfragen-Routing über mehrstufige KI-Agents.",
          en: "Automated quote review and inquiry routing via multi-step AI agents.",
          bg: "Avtomatizirana proverka na oferti i routing na zapitvaniya chrez AI agenti.",
        } as S,
      },
      {
        title: { de: "n8n-Pipeline für Fachhochschule", en: "n8n pipeline for university", bg: "n8n pipeline za visshe uchilishte" } as S,
        description: {
          de: "Datenpipeline zur Aufbereitung von Lehrmaterialien und Auswertung von Lernpfaden.",
          en: "Data pipeline for processing teaching materials and analyzing learning paths.",
          bg: "Data pipeline za obrabotka na uchebni materiali i analiz na uchebni pateki.",
        } as S,
      },
      {
        title: { de: "KI-Strategie-Workshop", en: "AI strategy workshop", bg: "Warkshop po AI strategiya" } as S,
        description: {
          de: "Zwei-Tages-Format für Führungskräfte: Use-Case-Mapping und Architekturentscheidungen.",
          en: "Two-day format for executives: use-case mapping and architecture decisions.",
          bg: "Dvudneven format za rakovoditeli: use case mapping i arhitekturni resheniya.",
        } as S,
      },
      {
        title: { de: "Vektor-Datenbank-Integration", en: "Vector database integration", bg: "Integratsiya na vektorna baza" } as S,
        description: {
          de: "Anbindung einer Vektor-DB an bestehende ERP-Landschaft mit dokumentierter Migration.",
          en: "Integrating a vector database into existing ERP landscape with documented migration.",
          bg: "Svarzvane na vektorna BD s ERP peyzazh i dokumentirana migratsiya.",
        } as S,
      },
    ],
  },
  references: {
    badge: { de: "Referenzen & Netzwerk", en: "References & network", bg: "Referentsii i mrezha" } as S,
    titleStart: { de: "Vertrauen aus", en: "Trust from", bg: "Doverie ot" } as S,
    titleAccent: { de: "Lehre und Praxis", en: "teaching and practice", bg: "prepodavane i praktika" } as S,
    summaryKicker: { de: "Netzwerk", en: "Network", bg: "Mrezha" } as S,
    summaryHeadline: {
      de: "Akademie, Unternehmen & Tech-Community.",
      en: "Academia, business & tech community.",
      bg: "Akademiya, biznes i tech obshtnost.",
    } as S,
    summaryLead: {
      de: "Drei Welten, ein roter Faden: Wissen weitergeben, Projekte umsetzen, am Puls der Entwicklung bleiben.",
      en: "Three worlds, one thread: share knowledge, deliver projects, stay close to the action.",
      bg: "Tri svyata, edna obshta nishka: predavane na znaniya, realizatsiya i ostavane v krak s razvitieto.",
    } as S,
    summaryLeadMobile: {
      de: "Drei Welten, ein roter Faden.",
      en: "Three worlds, one thread.",
      bg: "Tri svyata, edna nishka.",
    } as S,
    summaryMeta: {
      de: "3 Bereiche · DACH-Raum",
      en: "3 areas · DACH region",
      bg: "3 oblasti · DACH region",
    } as S,
    items: [
      {
        title: { de: "Akademisches Umfeld", en: "Academia", bg: "Akademichna sreda" } as S,
        tag: { de: "Lehre", en: "Teaching", bg: "Prepodavane" } as S,
        text: {
          de: "Lehre an Fachhochschulen und HTLs in Österreich. Forschungsnahe Vermittlung von KI, Mathematik und Data Science.",
          en: "Teaching at Austrian universities of applied sciences and HTLs. Research-driven instruction in AI, mathematics, and data science.",
          bg: "Prepodavane v avstriyski universiteti i HTL. Izsledovatelski podhod kam AI, matematika i data science.",
        } as S,
      },
      {
        title: { de: "Privatwirtschaft", en: "Private sector", bg: "Chasten sektor" } as S,
        tag: { de: "Beratung", en: "Consulting", bg: "Konsultatsii" } as S,
        text: {
          de: "Projekte und Beratungsmandate in unterschiedlichen Branchen — von Versicherung bis Industrie.",
          en: "Projects and consulting mandates across industries — from insurance to manufacturing.",
          bg: "Proekti i konsultatsii v razlichni industrii — ot zastrahovane do promishlenost.",
        } as S,
      },
      {
        title: { de: "Tech-Community", en: "Tech community", bg: "Tech obshtnost" } as S,
        tag: { de: "Austausch", en: "Exchange", bg: "Obmen" } as S,
        text: {
          de: "Aktiver Austausch mit KI-Expertinnen, Entwicklerinnen und Forschenden im deutschsprachigen Raum.",
          en: "Active exchange with AI experts, developers, and researchers across the German-speaking region.",
          bg: "Aktiven obmen s AI eksperti, razrabotchitsi i izsledovateli.",
        } as S,
      },
    ],
  },
  domains: {
    badge: { de: "Fachgebiete", en: "Expertise", bg: "Oblasti" } as S,
    titleStart: { de: "Wo ich", en: "Where I", bg: "Kadeto sam" } as S,
    titleAccent: { de: "tief im Thema", en: "go deep", bg: "v dalbochina" } as S,
    titleEnd: { de: " bin", en: "", bg: "" } as S,
    lead: {
      de: "Die Kombination aus Mathematik, KI-Engineering und Lehre sorgt dafür, dass Projekte technisch tragfähig und verständlich kommunizierbar bleiben.",
      en: "The combination of mathematics, AI engineering, and teaching keeps projects technically sustainable and clearly communicable.",
      bg: "Kombinatsiyata ot matematika, AI inzhenerstvo i prepodavane pravi proektite tehnicheski ustoychivi i yasno komunikiruemi.",
    } as S,
    items: [
      { title: { de: "Künstliche Intelligenz", en: "Artificial Intelligence", bg: "Izkustven intelekt" } as S, text: { de: "LLMs, Agenten, RAG, ML-Engineering", en: "LLMs, agents, RAG, ML engineering", bg: "LLM, agenti, RAG, ML inzhenerstvo" } as S },
      { title: { de: "Versicherungsmathematik", en: "Actuarial Mathematics", bg: "Aktyuerska matematika" } as S, text: { de: "Aktuarielle Modelle, stochastische Methoden", en: "Actuarial models, stochastic methods", bg: "Aktyuerski modeli, stohastichni metodi" } as S },
      { title: { de: "Data Science", en: "Data Science", bg: "Data Science" } as S, text: { de: "Statistik, Modellierung, Auswertung", en: "Statistics, modeling, analysis", bg: "Statistika, modelirane, analiz" } as S },
      { title: { de: "Bildung & Mentoring", en: "Education & Mentoring", bg: "Obrazovanie i mentorstvo" } as S, text: { de: "Lehre, Workshops, Coaching", en: "Teaching, workshops, coaching", bg: "Lektsii, warkshopi, kouching" } as S },
    ],
  },
  faq: {
    badge: { de: "FAQ", en: "FAQ", bg: "ChZV" } as S,
    titleStart: { de: "Häufige Fragen vor dem", en: "Common questions before the", bg: "Chesto zadavani vaprosi predi" } as S,
    titleAccent: { de: "Erstgespräch", en: "first call", bg: "parviya razgovor" } as S,
    lead: {
      de: "Die meistgestellten Fragen — hier kompakt beantwortet.",
      en: "The most common questions — answered compactly here.",
      bg: "Nay-chesto zadavanite vaprosi — otgovori nakratko.",
    } as S,
    sideCtaStrong: { de: "Andere Frage?", en: "Other question?", bg: "Drug vapros?" } as S,
    sideCtaSmall: { de: "Schreiben Sie mir direkt", en: "Write me directly", bg: "Pishete mi direktno" } as S,
    items: [
      {
        q: { de: "Wie läuft ein erstes Gespräch ab?", en: "What does a first call look like?", bg: "Kak proticha parviyat razgovor?" } as S,
        a: {
          de: "Ein unverbindliches 30-Minuten-Gespräch — per Video oder Telefon. Wir klären, worum es geht, ob das Vorhaben sinnvoll umsetzbar ist und welche nächsten Schritte ich empfehle. Ohne Verkaufsdruck.",
          en: "A no-strings 30-minute call — by video or phone. We clarify the topic, whether the project is sensibly feasible, and what next steps I recommend. No sales pressure.",
          bg: "Neobvarzvasht 30-minuten razgovor — video ili telefon. Utochnyavame temata, dali proektat e realizuem i kakvi sledvashti stapki preporachvam. Bez targovski natisk.",
        } as S,
      },
      {
        q: { de: "Was kostet ein Workshop?", en: "What does a workshop cost?", bg: "Kolko struva warkshop?" } as S,
        a: {
          de: "Abhängig vom Format und der Teilnehmerzahl. Inhouse-Workshops starten ab einem Tagessatz, der mehrere Teilnehmer:innen einschließt. Auf Anfrage schicke ich gerne eine konkrete Kalkulation für Ihr Anliegen.",
          en: "Depends on format and number of participants. In-house workshops start at a day rate covering multiple participants. On request I'll gladly send a concrete quote for your case.",
          bg: "Zavisi ot format i broy uchastnitsi. Inhouse warkshopi zapochvat ot dnevna tarifa za nyakolko uchastnitsi. Po zayavka izprashtam konkretna oferta.",
        } as S,
      },
      {
        q: { de: "Wie lange dauert ein RAG-Projekt?", en: "How long does a RAG project take?", bg: "Kolko prodalzhava RAG proekt?" } as S,
        a: {
          de: "Ein erster Prototyp ist meist in 2–4 Wochen produktionsnah verfügbar. Bis zur stabilen, dokumentierten Bereitstellung sind je nach Datenlage und Integrationsaufwand 6–12 Wochen realistisch.",
          en: "A first production-near prototype is usually available in 2–4 weeks. A stable, documented deployment realistically takes 6–12 weeks depending on data and integration effort.",
          bg: "Parvi prototip blizo do produktsiya obiknoveno e gotov za 2–4 sedmitsi. Stabilna realizatsiya — 6–12 sedmitsi spored dannite i integratsiyata.",
        } as S,
      },
      {
        q: { de: "Arbeiten Sie auch remote?", en: "Do you also work remote?", bg: "Rabotite li i distantsionno?" } as S,
        a: {
          de: "Ja, Beratungs- und Umsetzungsprojekte laufen überwiegend remote. Für Workshops bin ich österreichweit vor Ort, bei Bedarf auch im DACH-Raum.",
          en: "Yes — consulting and implementation projects mostly run remote. I'm on-site for workshops across Austria, and the DACH region on request.",
          bg: "Da — konsultatsii i realizatsiya osnovno distantsionno. Warkshopi na myasto v Avstriya, pri nuzhda i v DACH.",
        } as S,
      },
      {
        q: { de: "In welcher Sprache findet die Schulung statt?", en: "In which language are trainings held?", bg: "Na kakav ezik se provezhda obuchenieto?" } as S,
        a: {
          de: "Deutsch oder Englisch — je nach Teilnehmerkreis. Unterlagen können zweisprachig bereitgestellt werden.",
          en: "German or English — depending on the group. Materials can be provided bilingually.",
          bg: "Nemski ili angliyski — spored grupata. Materialite mogat da badat dvuezichni.",
        } as S,
      },
      {
        q: { de: "Welche Branchen haben Sie bereits begleitet?", en: "Which industries have you supported?", bg: "Koi industrii ste podkrepili?" } as S,
        a: {
          de: "Versicherung, Industrie, Bildung und öffentliche Verwaltung. Der inhaltliche Schwerpunkt ist immer derselbe: KI-Methoden technisch sauber und für das jeweilige Umfeld verständlich anwendbar machen.",
          en: "Insurance, manufacturing, education, and public administration. The focus is always the same: making AI methods technically sound and understandable for each context.",
          bg: "Zastrahovane, industriya, obrazovanie i publichna administratsiya. Fokusat e vinagi edin i sasht: AI metodi, koito sa tehnicheski korektni i razbiraemi za saotvetniya kontekst.",
        } as S,
      },
    ],
  },
  contact: {
    badgeButton: { de: "Kontakt aufnehmen", en: "Get in touch", bg: "Svarzhete se" } as S,
    titleStart: { de: "Lassen Sie uns Ihr", en: "Let's start your", bg: "Neka zapochnem Vashiya" } as S,
    titleAccent: { de: "KI-Projekt", en: "AI project", bg: "AI proekt" } as S,
    titleEnd: { de: " starten.", en: ".", bg: "." } as S,
    lead: {
      de: "Schreiben Sie mir kurz, worum es geht. Ich melde mich in der Regel innerhalb von zwei Werktagen mit einer konkreten Einschätzung.",
      en: "Drop me a short note. I usually respond within two business days with a concrete assessment.",
      bg: "Napishete mi nakratko. Obiknoveno otgovaryam v ramkite na dva rabotni dni s konkretna otsenka.",
    } as S,
    pointTime: {
      de: "Antwort innerhalb von 2 Werktagen",
      en: "Reply within 2 business days",
      bg: "Otgovor v ramkite na 2 rabotni dni",
    } as S,
    pointPlace: {
      de: "Österreichweit und remote",
      en: "Austria-wide and remote",
      bg: "V Avstriya i distantsionno",
    } as S,
    nameLabel: { de: "Name", en: "Name", bg: "Ime" } as S,
    namePh: { de: "Name", en: "Name", bg: "Ime" } as S,
    emailLabel: { de: "E-Mail", en: "Email", bg: "Imeyl" } as S,
    emailPh: { de: "E-Mail", en: "Email", bg: "Imeyl" } as S,
    messageLabel: { de: "Worum geht es?", en: "What's it about?", bg: "Za kakvo stava duma?" } as S,
    messagePh: {
      de: "Projekt, Ziel oder kurze Frage…",
      en: "Project, goal, or short question…",
      bg: "Proekt, tsel ili kratak vapros…",
    } as S,
    privacyText: {
      de: "Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Bearbeitung meiner Anfrage verarbeitet werden. Weitere Informationen in der",
      en: "I agree that my data will be processed for contact and to handle my inquiry. More info in the",
      bg: "Saglasen sam dannite mi da badat obrabotvani za kontakt i obrabotka na zapitvaneto. Podrobnosti v",
    } as S,
    privacyLink: { de: "Datenschutzerklärung", en: "privacy policy", bg: "politikata za poveritelnost" } as S,
    submit: { de: "Nachricht senden", en: "Send message", bg: "Izprati saobshtenie" } as S,
    sending: { de: "Sende…", en: "Sending…", bg: "Izprashtane…" } as S,
    errFill: {
      de: "Bitte alle Felder korrekt ausfüllen.",
      en: "Please fill in all fields correctly.",
      bg: "Molya popalnete vsichki poleta pravilno.",
    } as S,
    okDemo: {
      de: "Vielen Dank! (Demo: Versand ist noch nicht angebunden.)",
      en: "Thank you! (Demo: sending isn't wired up yet.)",
      bg: "Blagodarya! (Demo: izprashtane oshte ne e svarzano.)",
    } as S,
    ok: {
      de: "Vielen Dank — Ihre Nachricht ist angekommen.",
      en: "Thank you — your message has arrived.",
      bg: "Blagodarya — saobshtenieto e polucheno.",
    } as S,
    errSend: {
      de: "Senden fehlgeschlagen. Bitte später erneut versuchen.",
      en: "Sending failed. Please try again later.",
      bg: "Izprashtaneto ne uspya. Opitayte otnovo po-kasno.",
    } as S,
  },
  footer: {
    rights: { de: "Alle Rechte vorbehalten.", en: "All rights reserved.", bg: "Vsichki prava zapazeni." } as S,
    privacy: { de: "Datenschutz", en: "Privacy", bg: "Poveritelnost" } as S,
    imprint: { de: "Impressum", en: "Imprint", bg: "Izdatelski danni" } as S,
  },
  sticky: {
    cta: { de: "Kontakt aufnehmen", en: "Get in touch", bg: "Svarzhete se" } as S,
  },
};

export function t<T>(node: Record<Lang, T>, lang: Lang): T {
  return node[lang];
}
