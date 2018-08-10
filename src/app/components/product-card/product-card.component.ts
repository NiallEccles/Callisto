import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productType: string;
  @Input() productName: string;
  @Input() productDescription: string;

  constructor() { }

  ngOnInit() {
  }

}
