import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
	selector: 'app-page',
	templateUrl: './search.page.html',
	styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
/*
	mainuser: AngularFirestoreDocument
	userPosts
	sub
	posts
	username: string
	profilePic: string

	constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.posts = event.posts
			this.username = event.username
			this.profilePic = event.profilePic
		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe()
	}

	goTo(postID: string) {
		this.router.navigate(['/tabs/post/' + postID.split('/')[0]])
	}*/
	constructor(){}
	ngOnInit() {
	}
}