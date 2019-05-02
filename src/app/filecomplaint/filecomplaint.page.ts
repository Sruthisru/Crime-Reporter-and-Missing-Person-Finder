import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
import { firestore } from 'firebase/app';
import { AlertController} from '@ionic/angular'
import { UserService } from '../user.service';

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
  
    fileComplaint(){
      const { subject, location, description }=this
      try{  
      this.afstore.doc(`users/${this.user.getUID()}`).update({
        complaints: firestore.FieldValue.arrayUnion({
          subject,
          location,
          description
        })
      })
      /* complaints: firestore.FieldValue.arrayUnion(`${subject}`)
    })    
    this.afstore.doc(`complaints/${subject}`).set({
        location,
        description,
      Username: this.user.getUsername()   
      
      })*/
        this.router.navigate([ '/filecomplaint' ])
        this.showAlert("Success!","Complaint filed")
      }catch(error) {
          console.dir(error)
          this.showAlert("Error!","error.message")
        
        }
      }
}