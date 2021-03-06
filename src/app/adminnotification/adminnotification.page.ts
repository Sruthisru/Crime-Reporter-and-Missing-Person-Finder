import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

export interface User {
  username: string;
  address: string;
  no: string;
  complaints: Complaint[];
  crimes: Crimes[];
}

export interface Complaint{
  description: string;
  location: string;
  subject: string;
}
export interface Crimes{
  description: string;
  location: string;
  subject: string;
  date: string;
}
@Component({
  selector: 'app-adminnotification',
  templateUrl: './adminnotification.page.html',
  styleUrls: ['./adminnotification.page.scss'],
})
export class AdminnotificationPage implements OnInit {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
	constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
    console.log(afs);
    this.userCollection = afs.collection<User>('users');
    this.users = this.userCollection.valueChanges();
  }

  ngOnInit() {
  }

}
