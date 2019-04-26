import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-complaintstatus',
  templateUrl: './complaintstatus.page.html',
  styleUrls: ['./complaintstatus.page.scss'],
})
export class ComplaintstatusPage implements OnInit {
userID: string
mainuser
sub
complaints
  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.userID = this.route.snapshot.paramMap.get('id')

    this.mainuser = this.afs.doc(`users/${ this.userID }`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.complaints = event.complaints
			
  })
}
}
