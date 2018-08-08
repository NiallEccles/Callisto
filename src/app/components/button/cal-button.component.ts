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

  clickEvent(){
    if(document.documentElement.style.getPropertyValue('--primary') === '#2b2b2b'){
      document.documentElement.style.setProperty('--primary','#f9593a');
    }
    else{
      document.documentElement.style.setProperty('--primary','#2b2b2b');
    }
  }

}
