import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  public innerWidth: number;
  public isMobile: boolean;

  constructor() { }

  public checkWindow(){
    window.addEventListener("resize", ()=>{
      this.innerWidth = window.innerWidth;
      if(this.innerWidth > 620){
        // console.log(this.innerWidth);
        this.isMobile = false;
      }
      else{
        this.isMobile = true;
      }
    });
  }

  ngOnInit() {
    this.checkWindow();
  }

}
