import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {BasicModalComponent} from '../basic-modal/basic-modal.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  mouseOvered: number | null = null;
  faBriefcase = faBriefcase;

  timelineEntries = [{
    flag: 'Software Engineer',
    time: '2017 - X',
    title: '🍋 Lemon Companies 🍋',
    description: 'Lemon verzorgt mijn eerste werkervaring. Door een grote verscheidenheid aan projecten, kan ik groeien in de richting die ikzelf voor ogen heb.',
    longDescription: `Bij Lemon Companies kan ik als software engineer van een grote waaier aan verschillende projecten proeven. Hierin heb ik mijn interesse in afwisseling ontdekt.
      <br/> <br/><h5>Frontend:</h5><ul> <li>Angular</li><li>Ember</li><li>React</li></ul>
      <br/><h5>Backend:</h5><ul> <li>Java stack</li><li>NodeJS</li></ul>
      <br/><h5>Database:</h5><ul> <li>SQL (MySQL/MariaDB)</li></ul>`,
  }, {
    flag: 'Masterproef',
    time: '2017',
    title: 'IoT sensoren en smartphones',
    description: 'Ontwikkelen van een Android plugin om communicatie tussen IoT sensoren, de AllThingsTalk cloud en een applicatie te ondersteunen',
    longDescription: 'Mijn Masterproef aan de KULeuven was vooral IoT getint. Het doel was om een IoT devkit van AllThingsTalk eenvoudig te koppelen met eender welke Android applicatie. <br/> <br/>Het vooropgestelde doel was dus om een Android SDK te ontwikkelen die plug and play werkt met de AllThingsTalk cloud api, onafhankelijk van welk AllThingsTalk IoT toestel men gebruikt.',
  },
    // {
    //   flag: "Bachelorproef",
    //   time: "2016",
    //   title: "Alumni Ingenieursprijs",
    //   description: "Prijsuitrijking voor beste bachelorproef",
    //   longDescription: "Als bachelorproef hadden we het project \"Landelijke Thuiszorg\", deze werd door de KULeuven Alumni Ingenieurs geselecteerd als beste bachelorproef.",
    // },
    {
      flag: 'Bachelorproef',
      time: '2016',
      title: 'Project Landelijke Thuiszorg',
      description: 'Ontwerp en ontwikkeling van een webview en Android applicatie voor het opstellen en beheren van planningen. Beloond met de Alumni Ingenieursprijs!',
      longDescription: 'Ontwerp en ontwikkeling van een webview en Android applicatie voor het opstellen en beheren van planningen in de medische sector, naar wens van Landelijke Thuiszorg. <br/> <br/>In samenwerking met Landelijke Thuiszorg werd er een analyse opgesteld van de benodigdheden. Op basis hiervan werd de volledige full stack in groepsverband (3) uitgewerkt. Van database, backend tot frontend. Inclusief mobiele app (native, Android).  <br/> <br/> Onze groep werd door de KULeuven Alumni Ingenieurs beloond met de Alumni Ingenieursprijs.'
    }, {
      flag: 'Eindwerk',
      time: '2013',
      title: 'GIP Zonnevolger (Rotary prijs)',
      description: 'Het ontwerpen en realiseren van een constructie dat het mogelijk maakt om een zonnepaneel de zon te laten volgen',
      longDescription: `Als eindwerk in het middelbaar was de opdracht: het ontwerpen en realiseren van een constructie dat het mogelijk maakt om een zonnepaneel de zon te laten volgen. Dit in groepsverband (2), hebben we de opdracht enorm enthousiast aangepakt.<br/> <br/> Van alle hardware (echt zonnepaneel, geen miniatuur), stevige constructie (wind- en sterkteberekeningen) en alle electronica (meetsensoren, GPS, ...). Tot de veelvoudige software: wiskundige baanberekening en hardware management in een VB.net applicatie.<br/> <br/>Met dit project hebben we meegedaan met een wedstrijd georganiseert door de Rotary Club Meise-Bouchout (TSO-Trofee). Ons project kwam het sterkst voor de dag, waarmee we de TSO-Trofee binnenhaalden. `
    }];


  constructor(private modalService: NgbModal) {
  }

  openModal(timelineEntry: any) {
    const modalRef = this.modalService.open(BasicModalComponent);
    modalRef.componentInstance.title = timelineEntry.title;
    modalRef.componentInstance.content = timelineEntry.longDescription;
  }
}
