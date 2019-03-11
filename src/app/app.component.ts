import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appMenu = [
    {title: 'File complaint', url: '/test1', icon: 'add'},
    {title: 'File missing case', url: '/test2', icon: 'add'},
    {title: 'Report crime', url: '/test3', icon: 'add'},
    {title: 'Contact', url: '/test4', icon: 'contacts'}

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
