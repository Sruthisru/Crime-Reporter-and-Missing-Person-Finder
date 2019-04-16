import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController} from '@ionic/angular'
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
//import { MissingService } from '../missing.service';

import { firestore } from 'firebase/app';
import { Router } from '@angular/router';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-missingcasereg',
  templateUrl: './missingcasereg.page.html',
  styleUrls: ['./missingcasereg.page.scss'],
})
export class MissingcaseregPage implements OnInit {

  name: string=""
  age: number
  gender: string=""
  address: string=""
  phone: number
  desc: string=""
  imageURL: string
  noFace: boolean = false

	busy: boolean = false

  @ViewChild('fileButton') fileButton

  constructor(public http: Http,
    public afstore: AngularFirestore,
    public user: UserService,
    //public missing: MissingService,
    public router :Router,
    public alert: AlertController

    ) { }

  ngOnInit() {
  }

  
  createPost() {
    const image= this.imageURL
    const desc=this.desc
    const name=this.name
    const age=this.age
    const gender=this.gender
    const address=this.address
    const phone=this.phone

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      missingperson: firestore.FieldValue.arrayUnion({
        image,
        desc,
        name,
        age,
        gender,
        address,
        phone 
      })
  })
    
  /*  
  this.afstore.doc(`missingpersons/${this.user.getUID()}`).get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

    this.afstore.doc(`missingpersons/${this.user.getUID()}`).set({
      miss: firestore.FieldValue.arrayUnion({  
       image
    })
})*/
    this.showAlert("Success!","Missing case registered")

  }

  fileChanged(event){
    this.busy = true
    const files = event.target.files

    const data = new FormData()
    data.append('file',files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '67c8740eafce91809529' )
    
    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
    console.log(event)
    this.imageURL = event.json().file
    this.busy = false

    this.http.get(`https://ucarecdn.com/${this.imageURL}/detect_faces/`).subscribe(event => {
      this.noFace = event.json().faces == 0
    })
    })
  }

uploadFile(){
  this.fileButton.nativeElement.click()
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
}
