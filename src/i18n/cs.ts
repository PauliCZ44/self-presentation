import type { Dictionary } from "./en";

export const cs: Dictionary = {
  meta: {
    title: "Pavel Šťastný Portfolio",
    description:
      "Pavel Šťastný, front-end a AI inženýr. Pomáhám týmům zapojit AI do produktů a vyvíjet rychleji díky pracovním postupům s podporou AI.",
  },
  hero: {
    role: "Front-end & AI inženýr",
    imageAlt: "Fotka Pavla Šťastného",
    tagline:
      "Vyvíjím s pomocí AI a pomáhám ostatním pracovat efektivněji nebo zapojit AI do jejich produktů.",
    cta: "Napište mi",
    secondaryCta: "Co nabízím",
  },
  nav: {
    label: "Sekce",
    about: "O mně",
    consulting: "AI konzultace",
    experience: "Zkušenosti",
    projects: "Projekty",
    contact: "Kontakt",
  },
  sections: {
    about: "O MNĚ",
    techStack: "Moje technologie",
    workExperience: "PRACOVNÍ ZKUŠENOSTI",
    soloProjects: "SAMOSTATNÉ PROJEKTY",
    aiProjects: "AI PROJEKTY",
    aiConsulting: "AI INŽENÝRSTVÍ A KONZULTACE",
  },
  consulting: {
    intro:
      "Pomáhám týmům zapojit AI do jejich produktů a vyvíjet rychleji díky pracovním postupům s podporou AI. S AI pracuji denně, takže vím, co je připravené do produkce a co je jen demo.",
    services: [
      {
        title: "Agenti a automatizace",
        description:
          "Vlastní agenti, skills a MCP servery, které automatizují opakující se práci a propojují AI s vašimi interními nástroji.",
      },
      {
        title: "Vývoj urychlený AI",
        description:
          "Nastavení AI pracovních postupů pro váš tým: nástroje, konvence, code review a onboarding.",
      },
      {
        title: "AI audit a strategie",
        description:
          "Zjištění, kde se AI skutečně vyplatí a kde ne. Včetně nákladů, rizik a ochrany dat.",
      },
    ],
    caseStudiesTitle: "Vybrané práce",
    problem: "Problém",
    approach: "Postup",
    result: "Výsledek",
    caseStudies: [
      {
        title: "AI workflow pro front-end tým",
        problem:
          "Produktový tým spravující velkou React aplikaci ztrácel čas opakujícími se úkoly, nejednotným stylem kódu a pomalým code review.",
        approach:
          "Vytvořil jsem vlastní AI skills a agenty zakódující konvence týmu a sdílené prompty a pravidla pro linting, refaktoring a code review.",
        result:
          "Rychlejší dodávka rutinní práce, jednotnější kód a rychlejší onboarding.",
      },
      {
        title: "Web dodaný s pomocí AI",
        problem:
          "Malá firma potřebovala rychle profesionální web bez nákladů na hosting.",
        approach:
          "Řídil jsem AI nástroje při návrhu i implementaci, zkontroloval každý výstup a nasadil na Cloudflare Pages.",
        result:
          "Produkční web dodaný během jediného dne bez nákladů na hosting.",
      },
    ],
    ctaTitle: "Máte AI projekt nebo nápad?",
    ctaText:
      "Napište mi stručně, čeho chcete dosáhnout. Ozvu se vám s dalšími kroky.",
    ctaButton: "Napište mi",
    emailSubject: "Poptávka AI konzultace",
  },
  skillCards: [
    {
      title: "Fanoušek Reactu",
      description:
        "Jsem nadšený front-end vývojář a věnuji se hlavně React/TypeScript aplikacím.",
    },
    {
      title: "Důraz na kvalitu",
      description:
        "Mým hlavním cílem je skvělý uživatelský zážitek. Chci, aby byly aplikace přístupné, rychlé a příjemné na používání.",
    },
    {
      title: "Profesionál",
      description:
        "Píšu čistý, čitelný a udržovatelný kód podle osvědčených postupů.",
    },
    {
      title: "S AI na plný výkon",
      description:
        "AI využívám naplno v každodenní práci a umím ji zapojit i do vašich produktů a systémů, od chytrých funkcí po automatizované procesy.",
    },
  ],
  techStack: {
    main: "Hlavní technologie",
    ai: "AI a agenti",
    workedWith: "Zkušenosti s",
    other: "Další zájmy a nástroje",
  },
  experience: [
    {
      title: "Front-end vývojář, YunexTraffic s.r.o.",
      date: "05/2022 – dosud",
      description:
        "Ve FE/UX týmu vyvíjím webové aplikace a React komponenty v Reactu, TypeScriptu atd. Vedu vývoj UI knihovny a zlepšuji kvalitu kódu ve starších projektech pomocí lintování, refaktoringu a code review. Při tom neustále zlepšuji uživatelský komfort a myslím na výkon. Při programování běžně využívám AI, vytvářím vlastní skilly a vlastní agenty a pomáhám tak týmu zrychlovat vývoj.",
    },
    {
      title: "Webový vývojář, Papirfly",
      date: "07/2021 – 04/2022",
      description:
        "Vyvíjel jsem pro klienty webové aplikace a weby v JavaScriptu/TypeScriptu, Angularu, CSS (SASS) atd. Jako jediný front-end vývojář jsem postavil single-page aplikaci (SPA) ve vanilla JavaScriptu s komponentami založenými na třídách, SCSS styly a napojením na REST API.",
    },
    {
      title: "Softwarový tester, TwinSoft s.r.o",
      date: "11/2017 – 07/2021",
      description:
        "Brigáda při studiu na vysoké škole. Manuální i automatizované testování webové aplikace včetně práce s SQL databází. Svou zpětnou vazbou jsem pomáhal zlepšovat UX aplikace.",
    },
  ],
  projects: {
    introHandwritten:
      "Projekty psané ručně bez AI. Některé jsou cvičné, jiné plně funkční a společně ukazují kus mé cesty.",
    introAi:
      "Projekty vytvořené s pomocí AI nástrojů nebo jimi téměř celé vygenerované. Určuji směr, kontroluji výsledek a nasazuji ho. Je to skvělý způsob, jak dodat funkční web ve velmi krátkém čase.",
    imageAlt: "Obrázek aplikace:",
    technologies: "Technologie:",
    sourceCode: "Zdrojový kód",
    openDemo: "Otevřít demo",
    svelteOpinionLabel: "Můj názor na SVELTE: ",
    items: {
      bang: {
        content:
          "Kalkulačka skóre pro karetní hru BANG!. Bang! je společenská hra z prostředí Divokého západu, kterou navrhl Emiliano Sciarra a vyšla v roce 2002. Bodování vychází z oficiálního turnajového systému. Na konci každé hry dostane každý hráč body podle výsledku. Nezáleží na tom, kdo koho vyřadil.",
      },
      cestaky: {
        content:
          "Webová aplikace, která spočítá cestovní náklady podle zadaných údajů, např. startu, cíle, ceny za km apod. Je postavená na Reactu a Firebase. Vzdálenost se počítá přes MapBox directions API, adresy se získávají přes MapBox geocoding API.",
      },
      svelte: {
        content:
          "Aplikace z září 2021, kdy jsem začal zkoumat framework Svelte. Chtěl jsem si s ním něco zkusit, tak vznikl tenhle malý projekt. Je to jednoduchá čistě klientská aplikace, na které jsem si chtěl vyzkoušet novou technologii.",
        opinion:
          "Práce se Svelte mě moc bavila a podle mě je to výborná technologie. Líbí se mi hlavně rychlý start a celková jednoduchost frameworku. Skvělá je i dokumentace a ukázkové tutoriály. Oproti Reactu nebo Angularu působí Svelte mnohem lehčeji. Na založení projektu stačí stáhnout šablonu a můžete jet. Nasazení je taky snadné, protože Svelte vygeneruje čistý JS soubor, který se nasadí spolu s HTML a CSS. Jednoduché. S gh-pages je to velmi rychlý způsob, jak vyvíjet a nasazovat vlastní menší projekty.",
      },
      drums: {
        content:
          "Projekt vznikl jako vedlejší větev projektu Drum Machine z freeCodeCamp. V Beat Makeru můžete skládat hudbu (beaty) a pouštět je ve smyčce. V Drum Machine si můžete zahrát na virtuální bubny. Aplikace nabízejí různá nastavení: tempo, hlasitost, sadu bubnů, výšku tónu i vzhled. V Beat Makeru lze nastavení exportovat a importovat, takže můžete své skladby sdílet. Vytvořeno v prosinci 2021.",
      },
      pomodoro: {
        content:
          "Pomodoro časovač, který hlídá pracovní a odpočinkové intervaly. Intervaly si můžete nastavit a časovač vás zvukem upozorní, kdy si dát pauzu a kdy se vrátit k práci. Díky Unsplash API se při každém načtení zobrazí jiná náhodná fotka. Během práce se navíc objevují motivační citáty. Příjemným doplňkem jsou i zvukové signály.",
      },
      pedikura: {
        content:
          "Prezentační web pro mobilní pedikúru, vytvořený s pomocí AI a hotový za jediný den. Běží na Cloudflare Pages, takže za hosting ani doménu se neplatí.",
        tech: "Vývoj s pomocí AI, Cloudflare Pages",
      },
    },
  },
  footer: {
    links: "Odkazy",
    aboutPage: "O této stránce",
    aboutPageText:
      "Stránka je postavená na ♥ Astru ♥. I když je mým oblíbeným stackem React/TypeScript, dal jsem přednost čisté rychlosti před vlastním pohodlím při vývoji. Proto web používá jen mix Tailwindu, SCSS a dobrého starého vanilla JavaScriptu.",
    rights: "Všechna práva vyhrazena.",
  },
  randomizer: {
    tooltip: "Náhodná základní barva",
    title: "Náhodná barva",
  },
  languageSwitcher: {
    label: "Jazyk",
  },
};
