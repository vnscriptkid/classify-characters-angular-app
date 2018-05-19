import { CharacterService } from './character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private charService: CharacterService) {}

  ngOnInit() {
    this.charService.fetchChars();
  }
}
