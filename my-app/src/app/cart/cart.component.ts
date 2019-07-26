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
<<<<<<< HEAD
  price = 30
=======
  price = 30;
>>>>>>> 63314c0ab0cef10ff682289b8ea3478c4b052782

  minusElement(){
  this.count --
  this.priceTogether = this.priceTogether - this.price;
  
    console.log('-')
  };
 
  plusElement(){
    console.log('+')
    this.count ++
    this.priceTogether = this.priceTogether + this.price;
    
  };
  
}
