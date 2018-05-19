import { CharacterService } from './../character.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Character } from '../interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters: Character[];

  // selectedTab = 'all';
  // characterService: CharacterService;

  constructor(private characterService: CharacterService) {
    // this.characterService = characterService;
    // this.characters = this.characterService.renderList(this.selectedTab);
   }

  ngOnInit() {
    // console.log('init');
  }

  // handleTabChange(tab) {
  //   this.selectedTab = tab;
  //   this.characters = this.characterService.renderList(this.selectedTab);
  // }

  // ngOnChanges() {
  //   console.log('** Changes from service');
  // }

}
