import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list-item',
  templateUrl: 'list-item.html',
})
export class ListItemPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item')
  }

}
