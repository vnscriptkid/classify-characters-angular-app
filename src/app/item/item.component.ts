import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './../interface';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() char: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  changeSide(char: Character, side: string) {
    console.log('change side', side, char);
    this.characterService.changeSide(char, side);
    // this.char = { ...this.char, side: side };
  }

}
