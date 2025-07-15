import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {menuOutline} from 'ionicons/icons'
import {notifications} from 'ionicons/icons'
import {addCircle} from 'ionicons/icons'
import {chevronForwardCircle} from 'ionicons/icons'

import { IonicModule } from '@ionic/angular';
import{addIcons} from 'ionicons';
import {MemberComponent} from "@app/components/member/member.component";

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule, MemberComponent]
})
export class MembersPage implements OnInit {

  constructor() {
      addIcons({
    menuOutline,notifications,addCircle,chevronForwardCircle

    });
   }

  ngOnInit() {
  }

}
