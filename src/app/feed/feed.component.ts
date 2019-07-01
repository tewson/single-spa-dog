import { Component, OnInit } from '@angular/core';

import { StatusService } from '../status/status.service';
import Status from '../status/Status';
import Food from './Food';

const foodStatusMap = {
  [Food.HotDog]: Status.WithHotDog,
  [Food.Pizza]: Status.WithPizza
};

@Component({
  selector: 'dog-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  foodOptions: Food[] = Object.values(Food);

  constructor(private statusService: StatusService) { }

  feed(food: Food) {
    this.statusService.setStatus(foodStatusMap[food]);
  }

  ngOnInit() {
  }

}
