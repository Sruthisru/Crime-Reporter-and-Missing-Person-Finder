import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular'
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string =""
  password: string =""

  constructor(
    public afAuth: AngularFireAuth,
    public router :Router,
    public alert: AlertController,
    public user: UserService

  ) { }

  ngOnInit() {
  }
  // abcdefg + @gmail.com
  async login(){
    const { username, password }=this
    try {
      //kind of a hack
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)
       
      if(res.user) {
        this.user.setUser({
          username,
          uid:res.user.uid
        })
      this.showAlert("Success,'username'!","Logged in")
      if( username == "admin"){
        this.router.navigate([ '/admintabs' ])
      }
      else{
      this.router.navigate([ '/tabs' ])
      }
      }
    
    }catch(err) {
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("User not found")
        this.showAlert("Error!","User not found")

      }
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
