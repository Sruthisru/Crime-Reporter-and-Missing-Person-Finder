import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usermissing',
  templateUrl: './usermissing.page.html',
  styleUrls: ['./usermissing.page.scss'],
})
export class UsermissingPage implements OnInit {
 
	mainuser: AngularFirestoreDocument
	//userPosts
	sub
	missingperson
	

	constructor(private afs: AngularFirestore, private user: UserService, public router: Router) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.missingperson = event.missingperson
			

		})
	}
  ngOnInit() {
  }
  backClick(){
    this.router.navigate([ '/tabs/account' ])
  }
  }
