import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missingcasereg',
  templateUrl: './missingcasereg.page.html',
  styleUrls: ['./missingcasereg.page.scss'],
})
export class MissingcaseregPage implements OnInit {

  imageURL: string
  desc: string

  constructor(public http: Http,
    public afstore: AngularFirestore,
    public user: UserService,
    public router :Router

    ) { }

  ngOnInit() {
  }

  createPost() {
    const image= this.imageURL
    const desc= this.desc

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      posts: firestore.FieldValue.arrayUnion({
        image,
        desc
      })
    })
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
backClick(){
  this.router.navigate([ '/tabs' ])
}
}
