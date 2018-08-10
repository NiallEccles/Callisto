import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  private show: boolean;

  constructor() {
    this.show = false;
   }

  ngOnInit() {
  }

  private toggleDropdown(){
    if(this.show == true){
      this.show = false;
    }
    else{
      this.show = true;
    }
  }

}
