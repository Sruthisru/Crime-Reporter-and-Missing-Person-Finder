import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcomplaints',
  templateUrl: './listcomplaints.page.html',
  styleUrls: ['./listcomplaints.page.scss'],
})
export class ListcomplaintsPage implements OnInit {

  mainuser: AngularFirestoreDocument
	sub
  complaints	
  username: string
	constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
      this.complaints = event.complaints
      this.username = event.username
      //console.log(event);


		})
  }
  ngOnInit() {
  }

  }
