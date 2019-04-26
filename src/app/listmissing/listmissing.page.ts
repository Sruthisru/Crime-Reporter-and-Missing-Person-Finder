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
  missingperson: Missing[];
}

export interface Missing{
  name: string;
  age: number;
  gender: string;
  address: string;
  phone: number;
  desc: string;
  image: string;
}

@Component({
  selector: 'app-listmissing',
  templateUrl: './listmissing.page.html',
  styleUrls: ['./listmissing.page.scss'],
})
export class ListmissingPage implements OnInit {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
	constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
    console.log(afs);
    this.userCollection = afs.collection<User>('users');
    this.users = this.userCollection.valueChanges();
  }
  ngOnInit() {
  }
  backClick(){
    this.router.navigate([ '/admintabs/adminaccount' ])
  }
  }
