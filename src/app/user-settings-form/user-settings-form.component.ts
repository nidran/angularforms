import { Component, OnInit } from '@angular/core';
import {UserSettings} from "../data/user-settings"; 
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: null, 
    emailOffers: null,
    interfaceStyle: null,
    subscription:null,
    notes:null
  };

  userSettings : UserSettings = {...this.originalUserSettings};
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
    console.log('in onsubmit;',  form.valid);
  }

}
