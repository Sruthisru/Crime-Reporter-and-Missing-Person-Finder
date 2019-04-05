import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController} from '@ionic/angular'
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addmissingperson',
  templateUrl: './addmissingperson.page.html',
  styleUrls: ['./addmissingperson.page.scss'],
})
export class AddmissingpersonPage implements OnInit {

  name: string
  age: number
  gender: string
  address: string
  phone: number
  desc: string
  imageURL: string

  @ViewChild('fileButton') fileButton

  constructor(public http: Http,
    public afstore: AngularFirestore,
    public user: UserService,
    public router :Router,
    public alert: AlertController
  ) { }

  ngOnInit() {
  }
  addMissingPerson(){
  const image= this.imageURL
    const desc=this.desc
    const name=this.name
    const age=this.age
    const gender=this.gender
    const address=this.address
    const phone=this.phone

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      missing: firestore.FieldValue.arrayUnion({
        age,
        gender,
        address,
        phone,
        image,
        desc,
        name
        
      })
    })
    this.showAlert("Success!","Missing person added")
  }
  fileChanged(event){
    
    const files = event.target.files

    const data = new FormData()
    data.append('file',files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '67c8740eafce91809529' )
    
    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
    console.log(event)
    this.imageURL = event.json().file
    })
  }

uploadFile(){
  this.fileButton.nativeElement.click()
}



backClick(){
  this.router.navigate([ '/admintabs' ])
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