import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent implements OnInit {
  // headerImgUrl = require("./headerPic.png");
  title ="Header Title ";
  constructor() { }

  ngOnInit() {
  }

}
