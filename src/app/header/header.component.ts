import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = [
    { route: '', name: 'Dashboard' },
    { route: '/new', name: 'New Characters' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
