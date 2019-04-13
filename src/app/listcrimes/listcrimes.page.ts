import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcrimes',
  templateUrl: './listcrimes.page.html',
  styleUrls: ['./listcrimes.page.scss'],
})
export class ListcrimesPage implements OnInit {

  mainuser: AngularFirestoreDocument
  sub
  crimes
  complaints	
  username: string
	constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
		//this.mainuser = afs.doc(`crimes`)
		//this.sub = this.mainuser.valueChanges().subscribe(event => {
    //  this.crimes = event.crimes
     // this.username = event.username
      //console.log(event);
      this.crimes = afs.collection<any>('users');
      
  }
  ngOnInit() {
  }

}
