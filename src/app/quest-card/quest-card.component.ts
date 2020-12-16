import { Component, OnInit, Input } from '@angular/core';
import { Quest } from '../models';

@Component({
  selector: 'app-quest-card',
  templateUrl: './quest-card.component.html',
  styleUrls: ['./quest-card.component.css']
})
export class QuestCardComponent implements OnInit {

  @Input() quest: Quest;

  constructor() { }

  ngOnInit(): void {
  }

  isDescriptionList(): boolean {
    return !(typeof this.quest.description === 'string')
  }

}
