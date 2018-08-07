import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cal-button',
  templateUrl: './cal-button.component.html',
  styleUrls: ['./cal-button.component.css']
})
export class CalButtonComponent implements OnInit {

  @Input() calLink: string;

  constructor() { }

  ngOnInit() {
  }

}
