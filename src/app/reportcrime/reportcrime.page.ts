import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
import { firestore } from 'firebase/app';
import { AlertController} from '@ionic/angular'
import { UserService } from '../user.service';

@Component({
  selector: 'app-reportcrime',
  templateUrl: './reportcrime.page.html',
  styleUrls: ['./reportcrime.page.scss'],
})
export class ReportcrimePage implements OnInit {
  
  subject: string=""
  location: string=""
  date: string=""
  description: string=""

  constructor(
    public router :Router,
    public alert: AlertController, 
    public afstore: AngularFirestore,
    public user: UserService

  ) { }

  ngOnInit() {
  }
  backClick(){
    this.router.navigate([ '/tabs' ])
  }
  
  async showAlert(header: string, message: string) {
    const alert = await  this.alert.create({
    header,
    message,
    buttons:["Ok"]
    })
    await alert.present()
  }

  reportCrime(){
    const { subject, location, date, description }=this
    try{  
    this.afstore.doc(`users/${this.user.getUID()}`).update({
      crimes: firestore.FieldValue.arrayUnion({
        subject,
        location,
        date,
        description
      })
    })
    
      this.router.navigate([ '/tabs' ])
      this.showAlert("Success!","Done")
    }catch(error) {
        console.dir(error)
        this.showAlert("Error!","error.message")
      
      }
    }
}
