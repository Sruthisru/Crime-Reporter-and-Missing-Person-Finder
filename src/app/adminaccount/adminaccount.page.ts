import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminaccount',
  templateUrl: './adminaccount.page.html',
  styleUrls: ['./adminaccount.page.scss'],
})
export class AdminaccountPage implements OnInit {

  constructor( public router :Router
    ) { }

  ngOnInit() {
  }
  backClick(){
    this.router.navigate([ '/admintab' ])
  }
}
