import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { AlertController} from '@ionic/angular'
import { UserService } from '../user.service';
//import { User } from 'firebase';
@Component({
  selector: 'app-filecomplaint',
  templateUrl: './filecomplaint.page.html',
  styleUrls: ['./filecomplaint.page.scss'],
})
export class FilecomplaintPage implements OnInit {
  subject: string=""
  location: string=""
  description: string=""
  constructor(
    public afAuth: AngularFireAuth,
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
  async fileComplaint(){
    const { subject, location, description }=this
    try{  
     this.afstore.doc(`complaints/${this.user.getUID()}`).set({
        subject,
        location,
        description
      })
      //this.afstore.doc(`users/${res.user.uid}`).set({
        //name
      //})
      
  
      /*this.complaint.setComplaint({
        subject,
        location,
        description
      })
  */
      this.router.navigate([ '/tabs' ])
      this.showAlert("Success!","Welcome")
    }
    catch(error) {
        console.dir(error)
        this.showAlert("Error!","error.message")
      
      }
    }
}