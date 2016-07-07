import {NavController, Loading} from 'ionic-angular';
import {Component} from '@angular/core';
import {AuthData} from '../../providers/auth-data/auth-data';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [AuthData]
})
export class HomePage {
  constructor(public nav: NavController,public authData: AuthData) {
  this.nav = nav;
  this.authData = authData;
  }

logOut(event){
event.preventDefault();
  this.authData.logoutUser().then(() => {
    this.nav.rootNav.setRoot(LoginPage);
  });
}
}
