import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pillbox',
  templateUrl: './pillbox.component.html',
  styleUrls: ['./pillbox.component.css']
})
export class PillboxComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit() { }

}
