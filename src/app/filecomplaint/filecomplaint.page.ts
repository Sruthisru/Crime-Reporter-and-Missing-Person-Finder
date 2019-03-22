import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filecomplaint',
  templateUrl: './filecomplaint.page.html',
  styleUrls: ['./filecomplaint.page.scss'],
})
export class FilecomplaintPage implements OnInit {

  constructor(
    public router :Router

  ) { }

  ngOnInit() {
  }
  backClick(){
    this.router.navigate([ '/tabs' ])
  }
}
