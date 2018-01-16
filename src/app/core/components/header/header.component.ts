import { Constants } from './../../constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routes = Object.assign({}, Constants.Routes);
  constructor() { }

  ngOnInit() {
  }

}
