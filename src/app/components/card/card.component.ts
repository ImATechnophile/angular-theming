import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
cardSamples = [
    {
      title: 'Card 1',
      value: 'SCSS provides better workflows for maintaining your stylesheets.'
    },
    {
      title: 'Card 2',
      value: 'SCSS provides better workflows for maintaining your stylesheets.'
    },
    {
      title: 'Card 3',
      value: 'SCSS provides better workflows for maintaining your stylesheets.'
    },
    {
      title: 'Card 4',
      value: 'SCSS provides better workflows for maintaining your stylesheets.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
