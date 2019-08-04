import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { literalArr } from '@angular/compiler/src/output/output_ast';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  addedProducts: any[] = [];



  constructor() { }

  ngOnInit() {
    this.addedProducts = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : [];
  }
  
  count = 1;
  priceTogether = 25;
  price = 25;

  minusElement(){
  // add comment
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
