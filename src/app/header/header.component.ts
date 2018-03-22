import { People } from './../share/people';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  test = 'khaddfng';
  name: string;
  people = new People('gfkf', 9 );

  ngOnInit() {

  }

}
