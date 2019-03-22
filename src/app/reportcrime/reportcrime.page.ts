import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reportcrime',
  templateUrl: './reportcrime.page.html',
  styleUrls: ['./reportcrime.page.scss'],
})
export class ReportcrimePage implements OnInit {

  constructor(
    public router :Router

  ) { }

  ngOnInit() {
  }
  backClick(){
    this.router.navigate([ '/tabs' ])
  }
}
