import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usercomplaint',
  templateUrl: './usercomplaint.page.html',
  styleUrls: ['./usercomplaint.page.scss'],
})
export class UsercomplaintPage implements OnInit {
 
	mainuser: AngularFirestoreDocument
	//userPosts
	sub
	complaints
	

	constructor(private afs: AngularFirestore, private user: UserService, public router: Router) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.complaints = event.complaints
			

		})
	}
  ngOnInit() {
  }
  backClick(){
    this.router.navigate([ '/tabs/account' ])
  }
  }
