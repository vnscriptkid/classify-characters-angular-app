import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  sides = [
    { name: '', display: 'None' },
    { name: 'good', display: 'Good' },
    { name: 'bad', display: 'Dark' },
  ];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('onsubmit', form);
    if (form.valid) {
      this.characterService.addCharacter(form.value.name, form.value.side);
    } else {
      console.log('invalid form');
    }
  }

}
