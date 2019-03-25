import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { AlertController} from '@ionic/angular'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: any =""
  password: string =""
  cpassword: string =""
  constructor(
    public afAuth: AngularFireAuth,
    public router :Router,
    public alert: AlertController, 
    public afstore: AngularFirestore,
    public user: UserService
  ) { }

  ngOnInit() {
  }

  
  async register(){
    const { username, password,cpassword }=this
    if( password !== cpassword ){
      this.showAlert("Error!", " password does't match")
      return console.error("Password doesn't match")
      
    }
    try{
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password)

    this.afstore.doc(`users/${res.user.uid}`).set({
            username
    })

    this.user.setUser({
      username,
      uid: res.user.uid
    })

    this.router.navigate([ '/login' ])
    this.showAlert("Success!","Welcome")
  }
  catch(error) {
      console.dir(error)
      this.showAlert("Error!","error.message")
    
    }
  }
 async showAlert(header: string, message: string) {
  const alert = await  this.alert.create({
  header,
  message,
  buttons:["Ok"]
  })
  await alert.present()

  }
}
