import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  name:string
  nam
//age: string
  constructor(private route: ActivatedRoute,
    private afs: AngularFirestore
    ) { 


  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name')
    this.nam = this.afs.doc(`missingperson/${this.name}`).valueChanges()
    //this.age = this.route.snapshot.paramMap.get('age')

    console.log("name", +this.nam)
  }

}
