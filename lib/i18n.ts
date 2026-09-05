export type Lang = "de" | "en";

/** Vollständiger Name inkl. akademischem Titel — überall identisch verwenden. */
export const FULL_NAME = "Dipl.-Ing. Emil Marinov";

export const LANGS: Lang[] = ["de", "en"];

export const LANG_LABELS: Record<Lang, string> = {
  de: "DE",
  en: "EN",
};

type S = Record<Lang, string>;

export const tx = {
  nav: {
    start: { de: "Start", en: "Home" } as S,
    about: { de: "Über mich", en: "About" } as S,
    services: { de: "Leistungen", en: "Services" } as S,
    projects: { de: "Projekte", en: "Projects" } as S,
    references: { de: "Referenzen", en: "References" } as S,
    domains: { de: "Fachgebiete", en: "Expertise" } as S,
    faq: { de: "FAQ", en: "FAQ" } as S,
    contact: { de: "Kontakt", en: "Contact" } as S,
    skip: { de: "Zum Inhalt springen", en: "Skip to content" } as S,
    langAria: {
      de: "Sprache wechseln, aktuell Deutsch",
      en: "Change language, currently English",
    } as S,
  },
  hero: {
    badge: { de: "KI-Berater · Dozent", en: "AI Consultant · Lecturer" } as S,
    titleParts: {
      de: ["Künstliche", "Intelligenz,", "anwendbar", "gemacht."],
      en: ["Artificial", "intelligence,", "made", "applicable."],
    } as Record<Lang, string[]>,
    titleAccentIdx: [2, 3],
    lead: {
      de: "Beratung, Schulung und Umsetzung für Unternehmen.",
      en: "Consulting, training, and implementation for companies.",
    } as S,
    ctaPrimary: { de: "Kontakt aufnehmen", en: "Get in touch" } as S,
    ctaSecondary: { de: "Leistungen ansehen", en: "View services" } as S,
  },
  logoStrip: {
    label: { de: "Tätig für", en: "Working with" } as S,
    areas: {
      de: ["Fachhochschule", "HTL", "Industrie", "Versicherung", "Tech-Community"],
      en: ["University of Applied Sciences", "HTL", "Industry", "Insurance", "Tech Community"],
    } as Record<Lang, string[]>,
  },
  about: {
    badge: { de: "Über mich", en: "About" } as S,
    titleStart: { de: "Akademisch fundiert.", en: "Academically grounded." } as S,
    titleAccent: {
      de: "Praktisch angewendet.",
      en: "Practically applied.",
    } as S,
    para1: {
      de: "Ich bin Dozent an einer Fachhochschule und Professor an einer HTL. Meine Arbeit verbindet komplexe Mathematik mit moderner künstlicher Intelligenz — akademisch fundiert, praktisch anwendbar.",
      en: "I'm a lecturer at a university of applied sciences and a professor at an HTL. My work combines complex mathematics with modern AI — academically grounded, practically applicable.",
    } as S,
    para2: {
      de: "In über zehn Jahren Lehre habe ich mehr als 50 Diplom- und Abschlussprojekte begleitet.",
      en: "In over ten years of teaching I've supervised more than 50 thesis and diploma projects.",
    } as S,
    para3: {
      de: "Für Unternehmen bin ich Berater und Umsetzer: KI-Projekte enden nicht beim Proof-of-Concept, sondern werden produktiv und messbar.",
      en: "For companies I'm a consultant and implementer: AI projects move beyond proof-of-concept into productive, measurable solutions.",
    } as S,
    para3Mobile: {
      de: "Für Unternehmen Berater und Umsetzer — KI-Projekte bis zur produktiven Lösung führen.",
      en: "Consultant and implementer for companies — guiding AI projects to production.",
    } as S,
    approach: [
      { de: "Use Case schärfen", en: "Sharpen the use case" } as S,
      { de: "Architektur etablieren", en: "Establish the architecture" } as S,
      { de: "Transfer & Enablement", en: "Transfer & enablement" } as S,
    ],
    stats: [
      { de: "B2B-Integrationen", en: "B2B integrations" } as S,
      { de: "Prozessbeschleunigung", en: "Process acceleration" } as S,
      { de: "Jahre Lehrerfahrung", en: "years teaching experience" } as S,
      { de: "DSGVO-konform", en: "GDPR-compliant" } as S,
    ],
    cta: { de: "Kontakt aufnehmen", en: "Get in touch" } as S,
    portraitCaption: {
      de: "KI-Beratung · Lehre · Umsetzung",
      en: "AI Consulting · Teaching · Implementation",
    } as S,
  },
  services: {
    badge: { de: "Leistungen", en: "Services" } as S,
    titleStart: { de: "Wie ich Unternehmen", en: "How I support" } as S,
    titleAccent: { de: "unterstütze", en: "companies" } as S,
    lead: {
      de: "Von der ersten Einschätzung bis zur produktiven Lösung.",
      en: "From first assessment to production-ready solution.",
    } as S,
    items: [
      {
        label: { de: "Automation", en: "Automation" } as S,
        title: {
          de: "Prozessautomatisierung mit KI-Agents",
          en: "Process automation with AI agents",
        } as S,
        text: {
          de: "Wiederkehrende Aufgaben durch mehrstufige KI-Agents automatisieren — von der Analyse bis zur Integration.",
          en: "Automate recurring tasks via multi-step AI agents — from analysis to integration.",
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
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "KI-Betriebssystem", en: "AI Operating System" } as S,
        title: {
          de: "KI-Betriebssystem für Ihr Unternehmen",
          en: "An AI operating system for your company",
        } as S,
        text: {
          de: "Eine durchgängige KI-Schicht statt Insel-Tools — von den Zugängen bis zum Unternehmenswissen.",
          en: "One coherent AI layer instead of isolated tools — from access to company knowledge.",
        } as S,
        features: {
          de: [
            "Zugänge bündeln: Chat, Sprache, API und bestehende Oberflächen",
            "Orchestrierung: Agenten koordinieren und Aufgaben sauber übergeben",
            "Anbindung an ERP, CRM, Dokumente und Mail",
            "Modellauswahl ohne Anbieter-Abhängigkeit",
            "Unternehmenswissen als verlässlicher Kontext-Layer",
            "Governance: Rollen, Rechte und nachvollziehbare Protokolle",
          ],
          en: [
            "Unified access: chat, voice, API, and existing interfaces",
            "Orchestration: coordinating agents with clean task handoffs",
            "Integration with ERP, CRM, documents, and mail",
            "Model choice without vendor lock-in",
            "Company knowledge as a reliable context layer",
            "Governance: roles, permissions, and auditable logs",
          ],
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "Custom AI", en: "Custom AI" } as S,
        title: {
          de: "Maßgeschneiderte KI-Lösungen & RAG-Systeme",
          en: "Custom AI solutions & RAG systems",
        } as S,
        text: {
          de: "Eigene RAG-Systeme auf Ihren Daten: vom Prototyp bis zur sicheren Bereitstellung.",
          en: "Your own RAG systems on your data: from prototype to secure deployment.",
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
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "Enablement", en: "Enablement" } as S,
        title: {
          de: "Schulungen zu Künstlicher Intelligenz",
          en: "Training on artificial intelligence",
        } as S,
        text: {
          de: "Praxisnahe KI-Workshops für Fach- und Führungskräfte — Grundlagen bis Strategie.",
          en: "Hands-on AI workshops for specialists and executives — fundamentals to strategy.",
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
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "Workflow", en: "Workflow" } as S,
        title: {
          de: "Schulungen zur Prozessautomatisierung mit n8n",
          en: "Training on process automation with n8n",
        } as S,
        text: {
          de: "n8n-Schulungen für Datenpipelines und Automatisierung — hands-on mit echten Use Cases.",
          en: "n8n training for data pipelines and automation — hands-on with real use cases.",
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
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "Webinar", en: "Webinar" } as S,
        title: {
          de: "Live-Webinare zu KI und Automatisierung",
          en: "Live webinars on AI and automation",
        } as S,
        text: {
          de: "Kompakte Live-Webinare, 60 bis 120 Minuten — offen oder firmenintern, inklusive Aufzeichnung.",
          en: "Compact live webinars, 60 to 120 minutes — open or in-house, recording included.",
        } as S,
        features: {
          de: [
            "60 bis 120 Minuten, ohne Reiseaufwand",
            "Offene Termine oder firmeninterne Durchführung",
            "Live-Demos statt reiner Theorie",
            "Aufzeichnung und Unterlagen im Anschluss",
          ],
          en: [
            "60 to 120 minutes, no travel required",
            "Open dates or in-house sessions",
            "Live demos instead of pure theory",
            "Recording and materials provided afterwards",
          ],
        } as Record<Lang, string[]>,
      },
      {
        label: { de: "Begleitung", en: "Advisory" } as S,
        title: {
          de: "Individuelle Beratung & Projektbegleitung",
          en: "Individual consulting & project supervision",
        } as S,
        text: {
          de: "Beratung & Sparring über die gesamte Projektlaufzeit — auch als externer Reviewer.",
          en: "Consulting & sparring across the full project — also as external reviewer.",
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
        } as Record<Lang, string[]>,
      },
    ],
    showLabel: { de: "Leistung", en: "Service" } as S,
    scope: {
      title: {
        de: "Automatisierbar ist mehr, als die meisten vermuten",
        en: "More is automatable than most people expect",
      } as S,
      text: {
        de: "Überall dort, wo Informationen wiederkehrend erfasst, geprüft oder beantwortet werden — in praktisch jedem Geschäftsbereich.",
        en: "Wherever information is repeatedly captured, checked, or answered — in virtually every business area.",
      } as S,
      areas: {
        de: ["Vertrieb", "Marketing", "Einkauf", "Personal", "Entwicklung", "Produktion", "Finanzen", "Kundenservice"],
        en: ["Sales", "Marketing", "Procurement", "HR", "Development", "Production", "Finance", "Customer service"],
      } as Record<Lang, string[]>,
      note: {
        de: "… und weitere Bereiche — den passenden Einstieg finden wir im Erstgespräch.",
        en: "… and other areas — we'll find the right starting point in a first conversation.",
      } as S,
    },
  },
  aiOs: {
    badge: { de: "Produktpalette", en: "Product range" } as S,
    titleStart: { de: "KI-Betriebssysteme", en: "AI operating systems" } as S,
    titleAccent: { de: "in fünf Schichten", en: "in five layers" } as S,
    lead: {
      de: "Kein einzelnes Produkt, sondern eine Architektur. Erst im Zusammenspiel aller Schichten wird aus verstreuten Werkzeugen ein System.",
      en: "Not a single product but an architecture. Only when all layers work together do scattered tools become a system.",
    } as S,
    leadMobile: {
      de: "Kein einzelnes Produkt, sondern eine Architektur aus fünf Schichten.",
      en: "Not a single product, but an architecture of five layers.",
    } as S,
    layers: [
      {
        title: { de: "Interface", en: "Interface" } as S,
        text: {
          de: "Chat, Sprache, API — oder direkt in den Oberflächen, die Ihre Teams ohnehin nutzen.",
          en: "Chat, voice, API — or directly inside the interfaces your teams already use.",
        } as S,
      },
      {
        title: { de: "Orchestrierung", en: "Orchestration" } as S,
        text: {
          de: "Aufgaben zerlegen, an passende Agenten verteilen, mit klaren Übergaben zusammenführen.",
          en: "Breaking tasks down, routing them to suitable agents, reassembling through clear handoffs.",
        } as S,
      },
      {
        title: { de: "Skills & Tools", en: "Skills & tools" } as S,
        text: {
          de: "ERP-Abfragen, Dokumente, Mails, Datensätze — alles, was tatsächlich passieren soll.",
          en: "ERP queries, documents, emails, records — everything that actually needs to happen.",
        } as S,
      },
      {
        title: { de: "Modelle", en: "Models" } as S,
        text: {
          de: "Pro Aufgabe das passende Modell, austauschbar gehalten — keine Anbieter-Abhängigkeit.",
          en: "The right model per task, kept interchangeable — no single-vendor dependency.",
        } as S,
      },
      {
        title: { de: "Daten & Kontext", en: "Data & context" } as S,
        text: {
          de: "Unternehmenswissen aufbereitet und durchsuchbar: Richtlinien, Verträge, Handbücher.",
          en: "Company knowledge prepared and searchable: policies, contracts, manuals.",
        } as S,
      },
    ],
    governance: {
      title: { de: "Quer über allen Schichten: Governance", en: "Across all layers: governance" } as S,
      text: {
        de: "Rollen, Rechte, nachvollziehbare Protokolle, DSGVO-konform. Ohne diese Klammer bleibt KI ein Risiko statt eines Werkzeugs.",
        en: "Roles, permissions, auditable logs, GDPR-compliant. Without this bracket, AI stays a risk rather than a tool.",
      } as S,
    },
    cta: { de: "Passt das zu Ihrem Unternehmen?", en: "Would this fit your company?" } as S,
  },
  showcase: {
    badge: { de: "Projekte", en: "Projects" } as S,
    titleStart: { de: "Ausgewählte", en: "Selected" } as S,
    titleAccent: { de: "Arbeiten", en: "Work" } as S,
    lead: {
      de: "Ein Auszug aus Beratungs- und Umsetzungsprojekten der letzten Jahre — von RAG-Systemen über Agenten-Workflows bis zu Lehr- und Strategie-Formaten.",
      en: "A selection of consulting and implementation projects from recent years — from RAG systems and agent workflows to teaching and strategy formats.",
    } as S,
    leadMobile: {
      de: "Auszug aktueller Projekte — RAG, Agenten und Workshops.",
      en: "Recent projects — RAG, agents, and workshops.",
    } as S,
    items: [
      {
        title: { de: "RAG-Assistenz für Versicherer", en: "RAG assistant for insurers" } as S,
        description: {
          de: "Wissensdatenbank mit Retrieval-Augmented Generation für interne Sachbearbeitung.",
          en: "Knowledge base with Retrieval-Augmented Generation for internal case handling.",
        } as S,
      },
      {
        title: { de: "Agenten-Workflow für Industrie", en: "Agent workflow for industry" } as S,
        description: {
          de: "Automatisierte Angebotsprüfung und Rückfragen-Routing über mehrstufige KI-Agents.",
          en: "Automated quote review and inquiry routing via multi-step AI agents.",
        } as S,
      },
      {
        title: { de: "n8n-Pipeline für Fachhochschule", en: "n8n pipeline for university" } as S,
        description: {
          de: "Datenpipeline zur Aufbereitung von Lehrmaterialien und Auswertung von Lernpfaden.",
          en: "Data pipeline for processing teaching materials and analyzing learning paths.",
        } as S,
      },
      {
        title: { de: "KI-Strategie-Workshop", en: "AI strategy workshop" } as S,
        description: {
          de: "Zwei-Tages-Format für Führungskräfte: Use-Case-Mapping und Architekturentscheidungen.",
          en: "Two-day format for executives: use-case mapping and architecture decisions.",
        } as S,
      },
      {
        title: { de: "Vektor-Datenbank-Integration", en: "Vector database integration" } as S,
        description: {
          de: "Anbindung einer Vektor-DB an bestehende ERP-Landschaft mit dokumentierter Migration.",
          en: "Integrating a vector database into existing ERP landscape with documented migration.",
        } as S,
      },
    ],
  },
  /* =====================================================================
     ACHTUNG — DEMO-DATEN, NICHT LIVE SCHALTEN
     ---------------------------------------------------------------------
     Sämtliche Zitate, Namen und Unternehmen unten sind frei erfunden und
     dienen nur dazu, das Carousel-Layout beurteilen zu können.

     Gefälschte Kundenbewertungen sind in Österreich nach UWG und der
     EU-Richtlinie 2019/2161 unzulässig (Abmahn- und Bußgeldrisiko).
     Vor dem Livegang durch echte, freigegebene Stimmen ersetzen oder die
     Sektion in app/page.tsx auskommentieren.
     ===================================================================== */
  testimonials: {
    badge: { de: "Stimmen", en: "Testimonials" } as S,
    titleStart: { de: "Was Teilnehmende", en: "What participants" } as S,
    titleAccent: { de: "und Kunden sagen", en: "and clients say" } as S,
    lead: {
      de: "Rückmeldungen aus Workshops, Webinaren und Umsetzungsprojekten.",
      en: "Feedback from workshops, webinars, and implementation projects.",
    } as S,
    pause: { de: "Automatischen Lauf anhalten", en: "Pause automatic scrolling" } as S,
    play: { de: "Automatischen Lauf fortsetzen", en: "Resume automatic scrolling" } as S,
    regionLabel: { de: "Kundenstimmen", en: "Client testimonials" } as S,
    items: [
      {
        quote: {
          de: "Angebote liefen über drei Excel-Dateien. Heute macht das der Agent — aus zwei Tagen wurden vier Stunden.",
          en: "Quotes ran through three Excel files. The agent does it now — two days became four hours.",
        } as S,
        name: { de: "Katharina Brunner", en: "Katharina Brunner" } as S,
        role: { de: "Leitung Vertriebsinnendienst, Hollinger Industrietechnik", en: "Head of Inside Sales, Hollinger Industrietechnik" } as S,
        context: { de: "Prozessautomatisierung · 2025", en: "Process automation · 2025" } as S,
      },
      {
        quote: {
          de: "Er sagt auch klar, was KI nicht kann. Danach wussten wir, welche zwei Projekte wir starten — und welche drei nicht.",
          en: "He says plainly what AI cannot do. We left knowing which two projects to start — and which three to drop.",
        } as S,
        name: { de: "Michael Steiner", en: "Michael Steiner" } as S,
        role: { de: "Geschäftsführer, Steiner Metallbau", en: "Managing Director, Steiner Metallbau" } as S,
        context: { de: "Strategie-Workshop · 2025", en: "Strategy workshop · 2025" } as S,
      },
      {
        quote: {
          de: "Rund 70 Prozent der internen Rückfragen beantwortet das System selbst — mit Quellenangabe.",
          en: "Around 70 percent of internal queries are answered by the system itself — with sources cited.",
        } as S,
        name: { de: "Daniela Wagner", en: "Daniela Wagner" } as S,
        role: { de: "Prokuristin, Alpenland Versicherungsmakler", en: "Authorized Officer, Alpenland Versicherungsmakler" } as S,
        context: { de: "RAG-System · 2026", en: "RAG system · 2026" } as S,
      },
      {
        quote: {
          de: "Zwei Stunden Webinar, danach baute mein Team eigene n8n-Workflows. Live mitgebaut statt Folien.",
          en: "Two hours of webinar, then my team built their own n8n workflows. Hands-on, not slides.",
        } as S,
        name: { de: "Thomas Auer", en: "Thomas Auer" } as S,
        role: { de: "IT-Leiter, Auer Logistik", en: "Head of IT, Auer Logistik" } as S,
        context: { de: "n8n-Webinar · 2026", en: "n8n webinar · 2026" } as S,
      },
      {
        quote: {
          de: "Wir hatten fünf KI-Tools und kein System. Jetzt ist klar, wer worauf zugreifen darf — Betriebsrat inklusive.",
          en: "Five AI tools, no system. Now it's clear who may access what — works council included.",
        } as S,
        name: { de: "Petra Hofmann", en: "Petra Hofmann" } as S,
        role: { de: "Leitung Personal, Donau Handelsgruppe", en: "Head of HR, Donau Handelsgruppe" } as S,
        context: { de: "KI-Betriebssystem · 2026", en: "AI operating system · 2026" } as S,
      },
      {
        quote: {
          de: "Er erklärt Transformer so, dass es im dritten Jahrgang ankommt. Seine Diplomarbeiten sind die saubersten.",
          en: "He explains transformers so third-year students get them. His supervised theses are the soundest.",
        } as S,
        name: { de: "Mag. Reinhard Pichler", en: "Reinhard Pichler" } as S,
        role: { de: "Abteilungsvorstand Informatik, HTL", en: "Head of Computer Science Department, HTL" } as S,
        context: { de: "Lehre · seit 2019", en: "Teaching · since 2019" } as S,
      },
      {
        quote: {
          de: "Zwei Sitzungen, in denen er unsere Architektur zerlegt hat. Unangenehm — und ein halbes Jahr Irrweg gespart.",
          en: "Two sessions taking our architecture apart. Uncomfortable — and six months of wrong turns saved.",
        } as S,
        name: { de: "Stefan Gruber", en: "Stefan Gruber" } as S,
        role: { de: "CTO, Novaline Software", en: "CTO, Novaline Software" } as S,
        context: { de: "Architektur-Review · 2025", en: "Architecture review · 2025" } as S,
      },
      {
        quote: {
          de: "Die KI prüft jetzt alle Rahmenverträge statt Stichproben — und findet, was wir übersehen hätten.",
          en: "AI now checks every framework agreement instead of spot samples — and finds what we'd have missed.",
        } as S,
        name: { de: "Julia Mayr", en: "Julia Mayr" } as S,
        role: { de: "Einkaufsleitung, Traunstein Bau", en: "Head of Procurement, Traunstein Bau" } as S,
        context: { de: "Prozessautomatisierung · 2026", en: "Process automation · 2026" } as S,
      },
    ],
  },
  references: {
    badge: { de: "Referenzen & Netzwerk", en: "References & network" } as S,
    titleStart: { de: "Vertrauen aus", en: "Trust from" } as S,
    titleAccent: { de: "Lehre und Praxis", en: "teaching and practice" } as S,
    summaryKicker: { de: "Netzwerk", en: "Network" } as S,
    summaryHeadline: {
      de: "Ein breit gefächertes Netz.",
      en: "A broad network.",
    } as S,
    summaryLead: {
      de: "Gewachsen aus Lehre, Projekten und Community. Wo ein Vorhaben mehr braucht als eine Person, hole ich Leute dazu, mit denen ich schon gearbeitet habe.",
      en: "Grown from teaching, projects, and community. Where a project needs more than one person, I bring in people I have worked with before.",
    } as S,
    /* Namentliche Referenzen: nur eintragen, was belegbar ist und wofür eine
       Nennfreigabe des Unternehmens vorliegt. */
    namedLabel: {
      de: "Partner und Auftraggeber",
      en: "Partners and clients",
    } as S,
    named: [
      {
        name: "hango.at",
        url: "https://hango.at",
        role: { de: "Webdesign & digitale Gestaltung", en: "Web design & digital production" } as S,
      },
    ],
    summaryMeta: {
      de: "4 Bereiche · DACH-Raum",
      en: "4 areas · DACH region",
    } as S,
    items: [
      {
        title: { de: "Akademisches Umfeld", en: "Academia" } as S,
        tag: { de: "Lehre", en: "Teaching" } as S,
        text: {
          de: "Lehre an Fachhochschulen und HTLs in Österreich — KI, Mathematik, Data Science.",
          en: "Teaching at Austrian universities of applied sciences and HTLs — AI, mathematics, data science.",
        } as S,
      },
      {
        title: { de: "Privatwirtschaft", en: "Private sector" } as S,
        tag: { de: "Beratung", en: "Consulting" } as S,
        text: {
          de: "Projekte und Beratungsmandate von Versicherung bis Industrie.",
          en: "Projects and consulting mandates from insurance to manufacturing.",
        } as S,
      },
      {
        title: { de: "Tech-Community", en: "Tech community" } as S,
        tag: { de: "Austausch", en: "Exchange" } as S,
        text: {
          de: "Austausch mit KI-Expertinnen, Entwicklerinnen und Forschenden im DACH-Raum.",
          en: "Exchange with AI experts, developers, and researchers across the DACH region.",
        } as S,
      },
      {
        title: { de: "Partner & Spezialisten", en: "Partners & specialists" } as S,
        tag: { de: "Umsetzung", en: "Delivery" } as S,
        text: {
          de: "Entwicklung, Infrastruktur, Datenschutz und Recht — feste Ansprechpartner statt Weiterreichen.",
          en: "Development, infrastructure, data protection, and law — established contacts, no handing off.",
        } as S,
      },
    ],
  },
  domains: {
    badge: { de: "Fachgebiete", en: "Expertise" } as S,
    titleStart: { de: "Wo ich", en: "Where I" } as S,
    titleAccent: { de: "tief im Thema", en: "go deep" } as S,
    titleEnd: { de: " bin", en: "" } as S,
    lead: {
      de: "Die Kombination aus Mathematik, KI-Engineering und Lehre sorgt dafür, dass Projekte technisch tragfähig und verständlich kommunizierbar bleiben.",
      en: "The combination of mathematics, AI engineering, and teaching keeps projects technically sustainable and clearly communicable.",
    } as S,
    items: [
      { title: { de: "Künstliche Intelligenz", en: "Artificial Intelligence" } as S, text: { de: "LLMs, Agenten, RAG, ML-Engineering", en: "LLMs, agents, RAG, ML engineering" } as S },
      { title: { de: "Versicherungsmathematik", en: "Actuarial Mathematics" } as S, text: { de: "Aktuarielle Modelle, stochastische Methoden", en: "Actuarial models, stochastic methods" } as S },
      { title: { de: "Data Science", en: "Data Science" } as S, text: { de: "Statistik, Modellierung, Auswertung", en: "Statistics, modeling, analysis" } as S },
      { title: { de: "Bildung & Mentoring", en: "Education & Mentoring" } as S, text: { de: "Lehre, Workshops, Coaching", en: "Teaching, workshops, coaching" } as S },
    ],
  },
  faq: {
    badge: { de: "FAQ", en: "FAQ" } as S,
    titleStart: { de: "Häufige Fragen vor dem", en: "Common questions before the" } as S,
    titleAccent: { de: "Erstgespräch", en: "first call" } as S,
    lead: {
      de: "Die meistgestellten Fragen — hier kompakt beantwortet.",
      en: "The most common questions — answered compactly here.",
    } as S,
    sideCtaStrong: { de: "Andere Frage?", en: "Other question?" } as S,
    sideCtaSmall: { de: "Schreiben Sie mir direkt", en: "Write me directly" } as S,
    items: [
      {
        q: { de: "Wie läuft ein erstes Gespräch ab?", en: "What does a first call look like?" } as S,
        a: {
          de: "Ein unverbindliches 30-Minuten-Gespräch per Video oder Telefon: worum es geht, ob es sinnvoll umsetzbar ist, was ich empfehle. Ohne Verkaufsdruck.",
          en: "A no-strings 30-minute call: what it's about, whether it's feasible, what I'd recommend. No sales pressure.",
        } as S,
      },
      {
        q: { de: "Was kostet ein Workshop?", en: "What does a workshop cost?" } as S,
        a: {
          de: "Abhängig von Format und Teilnehmerzahl. Inhouse-Workshops starten ab einem Tagessatz für mehrere Teilnehmer:innen — auf Anfrage kalkuliere ich konkret.",
          en: "Depends on format and group size. In-house workshops start at a day rate covering several participants — I'll quote concretely on request.",
        } as S,
      },
      {
        q: { de: "Wie lange dauert ein RAG-Projekt?", en: "How long does a RAG project take?" } as S,
        a: {
          de: "Ein produktionsnaher Prototyp meist in 2–4 Wochen. Bis zur stabilen, dokumentierten Bereitstellung 6–12 Wochen.",
          en: "A production-ready prototype usually in 2–4 weeks. Stable, documented deployment in 6–12 weeks.",
        } as S,
      },
      {
        q: { de: "Arbeiten Sie auch remote?", en: "Do you also work remote?" } as S,
        a: {
          de: "Beratung und Umsetzung überwiegend remote. Für Workshops österreichweit vor Ort, bei Bedarf im DACH-Raum.",
          en: "Consulting and implementation run largely remote. On-site for workshops across Austria, DACH on request.",
        } as S,
      },
      {
        q: { de: "In welcher Sprache findet die Schulung statt?", en: "In which language are trainings held?" } as S,
        a: {
          de: "Deutsch oder Englisch, Unterlagen auf Wunsch zweisprachig.",
          en: "German or English, materials bilingual on request.",
        } as S,
      },
      {
        q: { de: "Welche Branchen haben Sie bereits begleitet?", en: "Which industries have you supported?" } as S,
        a: {
          de: "Versicherung, Industrie, Bildung und öffentliche Verwaltung — der Schwerpunkt bleibt derselbe: KI technisch sauber und verständlich anwendbar machen.",
          en: "Insurance, manufacturing, education, and public administration — the focus stays the same: making AI technically sound and understandable.",
        } as S,
      },
    ],
  },
  contact: {
    badgeButton: { de: "Kontakt aufnehmen", en: "Get in touch" } as S,
    titleStart: { de: "Lassen Sie uns Ihr", en: "Let's start your" } as S,
    titleAccent: { de: "KI-Projekt", en: "AI project" } as S,
    titleEnd: { de: " starten.", en: "." } as S,
    lead: {
      de: "Schreiben Sie mir kurz, worum es geht. Ich melde mich in der Regel innerhalb von zwei Werktagen mit einer konkreten Einschätzung.",
      en: "Drop me a short note. I usually respond within two business days with a concrete assessment.",
    } as S,
    pointTime: {
      de: "Antwort innerhalb von 2 Werktagen",
      en: "Reply within 2 business days",
    } as S,
    pointPlace: {
      de: "Österreichweit und remote",
      en: "Austria-wide and remote",
    } as S,
    nameLabel: { de: "Name", en: "Name" } as S,
    namePh: { de: "Name", en: "Name" } as S,
    emailLabel: { de: "E-Mail", en: "Email" } as S,
    emailPh: { de: "E-Mail", en: "Email" } as S,
    messageLabel: { de: "Worum geht es?", en: "What's it about?" } as S,
    messagePh: {
      de: "Projekt, Ziel oder kurze Frage…",
      en: "Project, goal, or short question…",
    } as S,
    privacyText: {
      de: "Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Bearbeitung meiner Anfrage verarbeitet werden. Weitere Informationen in der",
      en: "I agree that my data will be processed for contact and to handle my inquiry. More info in the",
    } as S,
    privacyLink: { de: "Datenschutzerklärung", en: "privacy policy" } as S,
    submit: { de: "Nachricht senden", en: "Send message" } as S,
    sending: { de: "Sende…", en: "Sending…" } as S,
    errFill: {
      de: "Bitte alle Felder korrekt ausfüllen.",
      en: "Please fill in all fields correctly.",
    } as S,
    okDemo: {
      de: "Vielen Dank! (Demo: Versand ist noch nicht angebunden.)",
      en: "Thank you! (Demo: sending isn't wired up yet.)",
    } as S,
    ok: {
      de: "Vielen Dank — Ihre Nachricht ist angekommen.",
      en: "Thank you — your message has arrived.",
    } as S,
    errSend: {
      de: "Senden fehlgeschlagen. Bitte später erneut versuchen.",
      en: "Sending failed. Please try again later.",
    } as S,
  },
  footer: {
    rights: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." } as S,
    privacy: { de: "Datenschutz", en: "Privacy" } as S,
    imprint: { de: "Impressum", en: "Imprint" } as S,
  },
  sticky: {
    cta: { de: "Kontakt aufnehmen", en: "Get in touch" } as S,
  },
};

export function t<T>(node: Record<Lang, T>, lang: Lang): T {
  return node[lang];
}
