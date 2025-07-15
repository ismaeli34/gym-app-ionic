import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import{addIcons} from 'ionicons';
import {homeOutline} from 'ionicons/icons'
import {home} from 'ionicons/icons'
import {person} from 'ionicons/icons'
import {people} from 'ionicons/icons'
import {calendar} from 'ionicons/icons'

import {personOutline} from 'ionicons/icons'
import {peopleOutline} from 'ionicons/icons'
import {calendarOutline} from 'ionicons/icons'
import { signal } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TabsPage implements OnInit {

  currentTab = signal<string>('members');

  constructor() {
    addIcons({
    home,person,people,calendar, homeOutline,personOutline,peopleOutline,calendarOutline
    });
   }

  ngOnInit() {


  }
    getCurrentTab(event: any) {
  console.log(event);
  this.currentTab.set(event.tab);
}

}
