import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
/*
	goTo(postID: string) {

		this.router.navigate(['/tabs/post/' + postID.split('/')[0]])
	}

userPosts
constructor(private afs: AngularFirestore, private user: UserService){
  const posts = afs.doc(`users/${user.getUID()}`)
		this.userPosts = posts.valueChanges()
}*/
	ngOnInit() {
	}

}
