import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

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
  user_id: string;
  matches: []
}

@Component({
  selector: 'app-listmissing',
  templateUrl: './listmissing.page.html',
  styleUrls: ['./listmissing.page.scss'],
})
export class ListmissingPage implements OnInit {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  matches: string[];
  environment: Object

	constructor(private afs: AngularFirestore, private user: UserService, private router: Router, public http: Http) {
    console.log(afs);
    this.userCollection = afs.collection<User>('users');
    this.users = this.userCollection.valueChanges();
    this.environment = environment
  }
  ngOnInit() {
  }
  backClick(){
    this.router.navigate([ '/admintabs/adminaccount' ])
  }
goTo(name: string){
  this.router.navigate(['list/' + name])
}

match(miss: Missing){
  console.log(miss.image + " : " + miss.user_id)
  this.http.get(environment.image_recognition_server + "compare_image/" + miss.image)
    .subscribe(event => {
    console.log(event)
    
    miss.matches = event.json().matches;
    console.log(this.matches)
    })
}

  }
