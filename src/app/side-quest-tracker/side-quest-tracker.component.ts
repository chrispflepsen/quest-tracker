import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Quest } from '../models'

@Component({
  selector: 'app-side-quest-tracker',
  templateUrl: './side-quest-tracker.component.html',
  styleUrls: ['./side-quest-tracker.component.css']
})
export class SideQuestTrackerComponent implements OnInit {

  public quests: Array<Quest> = null;
  private allQuests: Array<Quest> = null;

  public filterCompleted = true;
  public locationList: Array<string> = null;
  public selectedLocation: string = '';
  public showFiltersList = false;

  constructor(private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.httpClient.get<[Quest]>("assets/data/side-quests.json").subscribe((data: [Quest])=>{
      this.allQuests = data;
      this.quests = this.allQuests;
      this.locationList = this.cityDropDownList();
      this.filterQuests();
    })
  }

  filterQuests() {
    this.quests = this.allQuests.filter((quest) => {
      const isCorrectLocation = this.selectedLocation !== '' ? quest.city === this.selectedLocation : true;
      const isQuestStatusCorrect = this.filterCompleted ? quest.complete !== true : true;
      return isCorrectLocation && isQuestStatusCorrect;
    });
  }

  cityDropDownList(): Array<string> {
    return [...new Set( this.allQuests.map(obj => obj.city))];
  }

  onCheckBoxChanged() {
    this.filterQuests()
  }

  onSelectionChanged() {
    this.filterQuests()
  }

  onClickFilter() {
    this.showFiltersList = this.showFiltersList === true ? false : true;
  }

  onClickReset() {
    this.filterCompleted = true;
    this.selectedLocation = '';
    this.filterQuests();
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      if (this.showFiltersList === true) {
        this.showFiltersList = false;
      }
    }

}
