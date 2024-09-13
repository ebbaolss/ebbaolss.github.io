import {
  ucberkeley,
  rebel,
  uio,
  vipps,
  bekk,
  sikt,
  in2030,
  vippsinternship,
  aider,
  github,
  linkedin,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/ebba-maja-olsson-b689461ba/",
  },
  {
    title: "GitHub",
    icon: github,
    url: "https://github.com/ebbaolss",
  },
];

const experiences = [
  {
    title: "Developer - Summer internship",
    company_name: "Vipps MobilePay",
    icon: vipps,
    iconBg: "#383E56",
    date: "Juni 2024 - August 2024",
    description:
      "I løpet av sommeren jobbet jeg som utvikler i et internship hos Vipps MobilePay. Der fikk jeg muligheten til å jobbe med IOS-appen til Vipps, hvor vi i team løste problemstillingen gjentatte betalinger mellom personer og deling av faste utgifter. Jeg arbeidet hovedsakelig med Swift for iOS-utvikling og bidro også med noe backend-utvikling ved hjelp av Go. En veldig fin og lærerik sommer der jeg fikk muligheten til å bruke og utvide mine ferdigheter sammen med en god gjeng. 👉 Gå til Projects-seksjonen for å lese mer om sommeren hos Vipps",
    points: ["Swift, Go, Xcode, Git, Jira"],
  },
  {
    title: "Systemutvikler",
    company_name: "Aider",
    icon: aider,
    iconBg: "#E6DEDD",
    date: "Februar 2024 -",
    description:
      "I løpet av min tid hos Aider har jeg arbeidet med videreutvikling av et internt system laget på low-code plattformen Bubble.io. Der arbeider jeg med å forbedre systemets funksjonalitet, brukeropplevelse og kapasitetshåndtering.",
    points: ["Bubble.io, Low-code"],
  },
  {
    title: "Event Manager Assistant",
    company_name: "Rebel Oslo",
    icon: rebel,
    iconBg: "#383E56",
    date: "September 2021 - Juni 2024",
    description:
      "Rebel er en arena for kunnskapsdeling og denne jobben har lært meg mye om organisering, team-arbeid og skape produkter kunden ønsker.  Alt fra bookinger, kundeansvarlig, kundebehandling, fakturering i Xledger, ansvar for eventer og konferanser i større skala og andre administrative tjenester.",
    points: ["Xledger, Excel, Koordinering og Kundebehandlig"],
  },
  {
    title: "UiO - Studentambassadør for Institutt for informatikk  ",
    company_name: "Universitetet i Oslo",
    icon: uio,
    iconBg: "#E6DEDD",
    date: "Mars 2023",
    description:
      "Var studentambassadør for UiO i forbindelse med åpen dag på informatikk bygget. Her presenterte jeg informatikkstudiet og hadde omvisning for videregående elever. labla",
    points: [""],
  },
];

const education = [
  {
    institution: "University of California, Berkeley",
    icon: ucberkeley,
    iconBg: "#383E56",
    date: "August 2024 - Desember 2024",
    degree: "BISP Studyprogram - Computer science",
    type: "University of California, Berkeley",
    info: `Dette semesteret er jeg på utveksling ved UC Berkeley, her tar jeg emner innen kunstig intelligens, 
    algoritmisk mediedesign, entreprenørskap og frontend-arkitektur. Målet med semesteret er å fordype meg i nye teknologier, samt utfordre meg selv både teknisk og språklig.
    I tillegg til studiene har jeg blitt med i Cal Ski Club, spiller golf og tennis, og aktiv i ANSA som organiserer arrangementer for norske studenter i utlandet.
    `,
    points: ["Courses: ", "Extra: "],
  },
  {
    institution: "University of Oslo (UiO)",
    icon: uio,
    iconBg: "#E6DEDD",
    date: "August 2023 - Juni 2025",
    degree: "MSc Informatikk: Programmering and Systemarkitektur",
    type: "Universitetet i Oslo",
    info: `Studerer siste året på en master i informatikk: programmering og systemarkitektur. Kjernefagene inkluderer frontend- og apputvikling, 
    prosjektarbeid, agile metoder, IT-management og etisk hacking.
    `,
    points: ["Courses: ", "Extra: "],
  },
  {
    institution: "University of Oslo (UiO)",
    icon: uio,
    iconBg: "#E6DEDD",
    date: "August 2020 - Juni 2023",
    degree: "BSc Informatikk: Programmering and Systemarkitektur",
    type: "Universitetet i Oslo",
    info: `Bacheloren omfatter programmering i Kotlin, Java, Python, C og SQL, samt datasystemer og informasjonssikkerhet . Graden inkluderer også et større prosjektarbeid der vi i et team laget en android app. 👉 Sjekk det ut under Sikt i Projects-seksjonen.`,
    points: ["Courses: ", "Extra: "],
  },
];

const projects = [
  {
    name: "Portfolio nettside",
    date: "August 2024",
    description:
      "Har nylig begynt å lære meg react på egenhånd via youtube og har i forbindelse med dette laget denne portefølje-nettsiden ved bruk av react, typescript og vite.",
    points: ["React, TypeScript, vite"],
    image: portfolio,
    pitch: "Sjekk ut prosjektet her👇",
    source_code_link: "https://github.com/ebbaolss/ebbaolss.github.io",
  },
  {
    name: "Vipps Summerinternship",
    date: "Juni 2024 - August 2024",
    description:
      "I sommer jobbet jeg hos Vipps MobilePay der vi jobbet med to løsninger som vil gjøre hverdagen enklere for folk flest. Den ene løsningen tar for seg gjentatte betalinger mellom personer, og den andre gjør deling av utgifter enklere og mer oversiktlig. Løsningene ble utviklet i IOS appen til Vipps.",
    points: ["IOS, Go"],
    image: vippsinternship,
    pitch: "Sjekk ut prosjektet vårt her👇",
    source_code_link:
      "https://www.vipps.no/om-oss/nyheter/studenter-med-ukelønn-løsning-i-vipps/",
  },
  {
    name: "Sikt - En applikasjon for fjelltur-vandrere ",
    date: "Mars 2023 - Juni 2023",
    description:
      "Større prosjektarbeid innen software engineering der vi i team utviklet en android app, for visualisering av skydekke til fjelltopper i Norge. Værdata ble hentet fra APIer til Metrologisk Institutt. I prosjektarbeidet ble det benyttet Jetpack Compose med Kotlin for utvikling og Scrum, Kanban og Scrumban for arbeidsmetodikk. ✨Sikt ble kåret til en av årets beste apper i emnet vår 2023.✨",
    points: ["Kotlin"],
    image: sikt,
    pitch: "Sjekk ut prosjektet her👇",
    source_code_link: "https://github.com/ebbaolss/IN2000-Sikt",
  },
  {
    name: "Prosjektoppgave programmering i Java",
    date: "August 2022 - Desember 2022",
    description:
      "Et større semesterprosjekt i Java der vi i team på to laget en interpret for programmeringsspråket Asp.",
    points: ["Java"],
    image: in2030,
    pitch: "Sjekk ut prosjektet her👇",
    source_code_link: "https://github.com/ebbaolss/IN2030",
  },
  {
    name: "Andre prosjekter og prestasjoner",
    date: "Mars 2023 - June 2023",
    description:
      "Vinner av Bekk sin kodekamp ved  UiO vår 2023 der vi i team løste ulike oppgaver innen problemløsning, programmering og samarbeid.",
    points: [""],
    image: bekk,
    pitch: "",
    source_code_link: "",
  },
];

export { services, experiences, projects, education };
