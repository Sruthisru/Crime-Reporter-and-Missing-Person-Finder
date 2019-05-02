import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.page.html',
  styleUrls: ['notification.page.scss'],
})
export class NotificationPage {

  scheduled = []

  constructor(
    private plt: Platform,
    private localNotification: LocalNotifications,
    private alertctrl: AlertController
    ){
    this.plt.ready().then(() => {
      this.localNotification.on('click').subscribe(res => {
        console.log('click: ',res)
        let msg = res.data ? res.data.mydata : '';
        
      })
      this.localNotification.on('trigger').subscribe(res => {
        console.log('trigger: ',res)

        let msg = res.data ? res.data.mydata : '';

      })
    })
  }
  scheduleNotification() {
    this.localNotification.schedule({
      id: 1,
      title: 'Attention',
      text: 'Sruthis notification',
      data: { mydata: 'bnnnn'},
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND }
    })
  }
/*
  recurringNotification(){
      this.localNotification.schedule({
      id: 22,
      title: 'Recurring',
      text: 'Sruthis recurring notification',
      trigger: { every: ELocalNotificationTriggerUnit.MINUTE }
    })
  }
  repeatingDaily(){
    this.localNotification.schedule({
      id: 42,
      title: 'Good morning',
      text: 'Code something epic today',
      trigger: { every: { hour: 11, minute: 50 } }
    })
  }
  getAll(){

    this.localNotification.getAll().then(res => {
      this.scheduled = res
    })
      

  }*/
}
