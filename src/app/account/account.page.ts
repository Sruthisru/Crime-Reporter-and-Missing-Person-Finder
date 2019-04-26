import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  mainuser: AngularFirestoreDocument
	//userPosts
	sub
	missing
	name: string
	address: string
	no:number
	username: string

	constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.missing = event.missing
			this.name = event.name
			this.username = event.username
			this.address = event.address
			this.no = event.no

		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe()
	}

  ngOnInit() {
    
	}
}
