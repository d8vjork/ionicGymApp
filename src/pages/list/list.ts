import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListItemPage } from '../list-item/list-item';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string, note: string, img: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: 'Abdominales',
        note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: 'assets/imgs/abdominales.jpg'
      },
      {
        title: 'Abdominales',
        note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: 'assets/imgs/abdominales2.jpg'
      },
      {
        title: 'Flexiones',
        note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: 'assets/imgs/flexiones.png'
      }
    ];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListItemPage, {
      item: item
    });
  }
}
