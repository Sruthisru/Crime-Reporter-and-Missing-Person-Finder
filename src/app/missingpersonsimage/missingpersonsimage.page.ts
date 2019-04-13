import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missingpersonsimage',
  templateUrl: './missingpersonsimage.page.html',
  styleUrls: ['./missingpersonsimage.page.scss'],
})
export class MissingpersonsimagePage implements OnInit {
	mainuser: AngularFirestoreDocument
	//userPosts
	sub
	adminmissingperson
	username: string
	constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.adminmissingperson = event.adminmissingperson
			this.username = event.username

		})
  }

  ngOnInit() {
  }
}
