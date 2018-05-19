import { Component, OnInit, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Character } from './../interface';
import { CharacterService } from '../character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  // @Input() chars: Character[];
  chars: Character[] = [];
  param = 'all';
  subscription;

  constructor(private charService: CharacterService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.charService.fetchChars();
    this.activatedRoute.params.subscribe((data) => {
      this.chars = this.charService.renderList(data.side);
      this.param = data.side;
    }
  );

    this.subscription = this.charService.charactersChanged.subscribe(() => {
      this.chars = this.charService.renderList(this.param);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
