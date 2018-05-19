import { Character } from './interface';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let id = 5;

@Injectable()
export class CharacterService {
  constructor(private http: Http) {}

  private characters: Character[] = [
    { id: 0, name: 'harry potter', side: 'bad' },
    { id: 1, name: 'Hermione Granger', side: 'good' },
    { id: 2, name: 'Ron Weasley', side: 'bad' },
    { id: 3, name: 'Lord Voldemort', side: 'good' },
    { id: 4, name: 'Professor Severus Snape', side: 'good' }
  ];

  charactersChanged: Subject<any> = new Subject<any>();

  // private router: Router;

  renderList(selectedTab: string) {
    if (selectedTab === 'all') {
      return [...this.characters];
    } else if (selectedTab === 'good') {
      return this.characters.filter(char => char.side === 'good');
    } else if (selectedTab === 'bad') {
      return this.characters.filter(char => char.side === 'bad');
    }
  }

  changeSide(char: Character, side: string) {
    this.characters = this.characters.map(item => {
      if (item.id === char.id) {
        return { ...item, side: side };
      }
      return item;
    });
    this.charactersChanged.next();
    console.log('from service: ', this.characters);
  }

  addCharacter(name: string, side: string) {
    this.characters = this.characters.concat({ id: id++, name, side });
    // this.router.navigate(['/chars']);
    console.log(this.characters);
  }

  fetchChars() {
    this.http.get('https://swapi.co/api/people/')
    .map((res: Response) => {
      // return res.json();
      const charsArr = res.json().results;
      return charsArr.map(char => ({ id: id++, name: char.name, side: '' }));
    })
    .subscribe((res) => {
      console.log(res);
      this.characters = res;
      this.charactersChanged.next();
    });
  }
}
