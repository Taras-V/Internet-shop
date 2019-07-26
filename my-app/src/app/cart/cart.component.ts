import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { literalArr } from '@angular/compiler/src/output/output_ast';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }
  
  count = 1;
  priceTogether = 35;


  minusElement(){
  this.count --
  this.priceTogether = this.count * this.priceTogether
  
    console.log('-')
  };
 
  plusElement(){
    console.log('+')
    this.count ++
    this.priceTogether = this.priceTogether + this.priceTogether
    
  };
  
}
