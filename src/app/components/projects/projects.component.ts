import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  timelineEntries = [{
    title: 'Forganiser',
    company: 'Lemon Companies',
    function: 'Lead developer (fullstack)',
    description: 'Forganiser is een SaaS personeelsplanning tool. Stel snel en eenvoudig je planning op, zodat je focus kan liggen op resultaten in plaats van planningen.',
    techonology: 'SaaS: Ember - Java - MySQL. App: React',
    url: 'https://www.forganiser.be/',
    img: 'https://i.imgur.com/2EgR6bE.png'
  }, {
    title: 'Het Land Van Ooit',
    company: 'Lemon Companies',
    function: 'Developer (fullstack)',
    description: 'Het Land Van Ooit is een winkelketen voor de kleintjes. Dit project bestaat uit meerdere delen: enterprise resource planning (ERP), kassa systeem en webshop.',
    techonology: 'Backend: Java - MySQL. ERP: Ember, webshop en kassa: Angular',
    url: 'https://www.hetlandvanooit.be/',
    img: 'https://www.hetlandvanooit.be/assets/img/top_logo.png'
  }, {
    title: 'Moonshine',
    company: 'Lemon Companies',
    function: 'Lead developer (frontend)',
    description: 'Moonshine is een platform voor het visualiseren en managen van al je digitale currencies over verschillende platformen. Een gedetailleerde weergave van je cryptocurrency portfolio.',
    techonology: 'Frontend: Angular',
    url: 'https://www.moonshine.trading/',
    img: 'https://i.imgur.com/1XHXNFu.png'
  }, {
    title: 'Samana',
    company: 'Lemon Companies',
    function: 'Developer (fullstack)',
    description: 'Het Samana (blijven reizen) .',
    techonology: 'SaaS: Ember - Java - MySQL',
    url: 'https://www.moonshine.trading/',
    img: 'https://i.imgur.com/1XHXNFu.png'
  },];

  constructor() {
  }

  ngOnInit() {
  }

}
