export interface Project {
  src: string;
  title: string;
  company: string;
  role: string;
  technology: string;
  descriptionNl: string;
  descriptionEn: string;
}

export const projects: Project[] = [
  {
    src: '/assets/images/projects/forganiser.png',
    title: 'Forganiser',
    company: 'Lemon 🍋',
    role: 'Lead developer',
    technology: 'Backend: Java - MySql. Frontend: Ember. Mobile: React',
    descriptionNl: 'Forganiser is een personeelsplanning tool die op een intuïtive manier te werk gaat. Verzorgt communicatie tussen planner en werknemer, biedt werknemers een mobiele applicatie aan om on-site te gebruiker om te klokken. Beschikt over een integratie met Lightspeed kassasysteem, en financiële opvolging.',
    descriptionEn: 'Forganiser is a personel planning tool that works intuitively. Communicates between planner and worker, gives workers a mobile application to clock in and manage their time registration. Forganiser has an integration with Lightspeed cash register system, and financial tracking.',
  },
  {
    src: '/assets/images/projects/hlvo.png',
    title: 'Het Land van Ooit',
    company: 'Lemon 🍋',
    role: 'Lead developer',
    technology: 'Backend: Java - Mysql. Frontend: Angular & Ember',
    descriptionNl: 'Het Land van Ooit is eigenlijk de oorsprong van het NOAH ERP systeem, met focus op babywinkels. Echter is dit systeem reeds uitgebreid naar andere oorden, zoals Andy (drankenspeciaalzaak). Het NOAH ERP is zeer uitgebreid en heeft een geïntegreerde geboortelijst frontend, en is geschreven in Ember. De HVLO webshop is geschreven in Angular.',
    descriptionEn: 'Het Land van Ooit is the origin of the NOAH ERP system, an ERP system with the focus on baby stores. However, this system has already extended to other branches, such as Andy (beverage shop). The NOAH ERP is very extensive and has an integrated birth list frontend, and is written in Ember. The HVLO webshop is written in Angular.',
  },
  {
    src: '/assets/images/projects/samana.png',
    title: 'Samana: Blijven Reizen',
    company: 'Lemon 🍋',
    role: 'Developer',
    technology: 'Backend: Java - Mysql. Frontend: Ember',
    descriptionNl: 'Blijven Reizen is een applicatie die groepsvakanties aanbiedt vanuit de cm. Functioneel gaat de applicatie een stapje verder, en is het stilaan een beetje gegroeid tot een platform dat de digitalisering (deels) ondersteunt bij de cm.',
    descriptionEn: ' Blijven Reizen is a platform that offers group vacations from the cm. The application is not really limited to this. Behind the scenes multiple smaller tools are integrated to support (part) of the digitalization at cm.',
  },
  {
    src: '/assets/images/projects/moonshine.png',
    title: 'Moonshine',
    company: 'Lemon 🍋',
    role: 'Lead developer',
    technology: 'Frontend: Angular',
    descriptionNl: 'Moonshine is een platform voor het visualiseren en managen van al je digitale currencies over verschillende platformen. Een gedetailleerde weergave van je cryptocurrency portfolio.',
    descriptionEn: 'Moonshine is a platform for visualizing and managing all your digital currencies over different platforms. A detailed view and analysis of your cryptocurrency portfolio.',
  },
  {
    src: '/assets/images/projects/ey.png',
    title: 'EY: BMT',
    company: 'Lemon 🍋',
    role: 'Developer',
    technology: 'Backend: Java (Spring) - MySql. Frontend: Angular',
    descriptionNl: 'Een facturatietool dat instaat om projecten (en consultants) financieel op te volgen en in te plannen. Een combinatie van dashboards, alerting, en customizable workflows biedt de gebruiker een flexibele en eenvoudige interface om zijn projecten te beheren en op te volgen.',
    descriptionEn: 'A financial tool that helps you track projects (and consultants) and plan them.  A combination of dashboards, alerting, and customizable workflows gives the user a flexible and easy interface to manage and track their projects.',
  },
  {
    src: '/assets/images/projects/clickcare.png',
    title: 'ClickCare',
    company: 'Lemon 🍋',
    role: '(Lead) Developer',
    technology: 'IDP: KeyCloak. Backend: Java (Spring) - Mysql. Frontend: Angular',
    descriptionNl: 'Een service platform dat functionaliteit biedt voor drie rollen: zorgverleners, zorgvragers en admins. Zorgvragers plaatsen taken, die vervolgens door zorgverleners worden opgepikt. Admins zorgen voor een correct verloop en afhandeling.',
    descriptionEn: 'A service platform that provides functionality for three roles: caregivers, caregivers and admins. Caregivers place tasks, which are then picked up by caregivers. Admins manage a correct flow and handling.',
  },
  {
    src: '/assets/images/projects/limine.png',
    title: 'Limine',
    company: 'Lemon 🍋',
    role: '(Lead) Developer',
    technology: 'IDP: KeyCloak. Backend: Java (Spring) - Mysql. Frontend: Angular',
    descriptionNl: 'Functioneel eigenlijk een beetje gelijklopend als ClickCare, maar met andere rollen: consultants, werkgevers en admins. Voor deze applicatie is er eigenlijk een beetje een V2 geschreven van ClickCare.',
    descriptionEn: 'Functionally a bit like ClickCare, but with other roles: consultants, employers and admins. For this application we started from the ClickCare base but basically developed a V2.',
  },
  {
    src: '/assets/images/projects/andy.png',
    title: 'Contaynor - Andy',
    company: 'Lemon 🍋',
    role: 'Analist & Developer',
    technology: 'NodeJS (express)',
    descriptionNl: 'Tweedelig: \n 1. Standalone microservice dat de communicatie verzorgd tussen Noah (ERP backend systeem) en Exact Online (boekhoudprogramma) en NextUp (scheduling software). \n 2. Standalone microservice dat alle communicatie verzorgd tussen NOAH (ERP backend systeem) en een Magento webshop. ',
    descriptionEn: 'Two parts: \n 1. Standlone microservice that communicates between NOAH (ERP backend system) and Exact Online (bookkeeping program) and NextUp (scheduling software). \n 2. Standalone microservice that communicates between Noah (ERP backend system) and a Magento webshop. ',
  },
  {
    src: '/assets/images/projects/das.png',
    title: 'DAS verzekeringen',
    company: 'Lemon 🍋',
    role: 'Developer',
    technology: 'Backend: NodeJS (Nest.js). Frontend: Angular. Database: IBMi',
    descriptionNl: 'Onder de DAS noemer valt een heel ecosysteem van systemen. Op een soort van consultancy basis wordt er gewerkt aan nieuwe platformen, maar eveneens onderhoud en upgrades van oude platformen. Nieuwe projecten pakken we steeds aan met de Angular/NestJS stack.',
    descriptionEn: 'Under the DAS umbrella exists a whole ecosystem of systems. On a sort of consultancy basis we work on new platforms, next to maintaining and upgrading old platforms. New projects are mostly started with the Angular/NestJS stack.',
  },
  {
    src: '/assets/images/projects/wellbeing.png',
    title: 'Wellbeing',
    company: 'Lemon 🍋',
    role: 'Developer',
    technology: 'Microservice project. Backends in Java (Spring) - Mysql. Frontend in Angular. Native (windows) application: Electron.',
    descriptionNl: 'Wellbeing gaat op basis van AI gezichtsanalyse doen bij zijn gebruikers, om bedrijven een beter beeld te geven van hun werknemers. Om zo verder in te zetten op een gezonde werksfeer.',
    descriptionEn: 'Wellbeing is based on AI face analysis to give companies a better (perosonal) view of their employees. The goal is to further improve the working environment.',
  },
];
