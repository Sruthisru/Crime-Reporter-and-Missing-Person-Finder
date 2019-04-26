import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usercrime',
  templateUrl: './usercrime.page.html',
  styleUrls: ['./usercrime.page.scss'],
})
export class UsercrimePage implements OnInit {
 
	mainuser: AngularFirestoreDocument
	//userPosts
	sub
	crimes
	

	constructor(private afs: AngularFirestore, private user: UserService, public router: Router) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.crimes = event.crimes
			

		})
	}
  ngOnInit() {
  }
  backClick(){
    this.router.navigate([ '/tabs/account' ])
  }
  }
