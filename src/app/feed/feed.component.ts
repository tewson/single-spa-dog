import { Component, OnInit } from '@angular/core';

import Food from './Food';

@Component({
  selector: 'dog-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  foodOptions: Food[] = Object.values(Food);

  constructor() { }

  ngOnInit() {
  }

}
