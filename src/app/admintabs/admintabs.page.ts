import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabBar, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-admintabs',
  templateUrl: './admintabs.page.html',
  styleUrls: ['./admintabs.page.scss'],
})
export class AdmintabsPage implements OnInit {
  @ViewChild('admintabs') tabs: IonTabs
  constructor() { }

  ngOnInit() {
    this.tabs.select('adminhome')
  }

}
