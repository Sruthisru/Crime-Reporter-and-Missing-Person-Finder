import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabBar, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './listcase.page.html',
  styleUrls: ['./listcase.page.scss'],
})
export class ListcasePage implements OnInit {
  @ViewChild('listcase') tabs: IonTabs
  constructor() { }

  ngOnInit() {
    this.tabs.select('usercomplaint')
  }

}
