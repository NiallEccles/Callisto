import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {

  @Input() fabIcon: string;
  @Input() fabLink: string;
  @Input() invert: boolean;

  constructor() {
    this.fabIcon = '3d_rotation'
    this.fabLink = '/';
    this.invert = false;
   }

  ngOnInit() {}

}
