import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})

export class FirstpagePage implements OnInit {
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    var coll = db.collection('users', ref => ref.orderBy('name'));
    var uu = coll.valueChanges();
    
    console.log(uu);

   }

  ngOnInit() {
  }

}
