import { Component, OnInit } from '@angular/core';
import {UserSettings} from "../data/user-settings"; 
@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscription:'Annual',
    notes:'hhey there'
  };

  userSettings : UserSettings = {...this.originalUserSettings};
  constructor() { }

  ngOnInit(): void {
  }

}
