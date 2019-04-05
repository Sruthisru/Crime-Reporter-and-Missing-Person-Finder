import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  /*username: string =""
  password: string =""
  
  constructor(public navCtrl: NavController, public http: Http) {
  //this.data.username = ‘’;
  this.data.response = ‘’;*/
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    
  }
}
