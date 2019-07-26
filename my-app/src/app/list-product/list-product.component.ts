import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  @Input() productName;
  @Output() addProduct = new EventEmitter();

  constructor() { }

  products = [
    {
     id:1,
     name:"article 1",
     label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     price:25,
     isAdded: false,
     image: '/assets/element_1.jpg'
   },
  {
    id:2,
    name:"article 2",
    label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price:35,
    isAdded: false,
    image: '/assets/element_2.jpg'
   },
  {
    id:3,
    name:"article 3",
    label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price:45,
    isAdded: false,
    image: '/assets/element_3.jpg'
   }
   ]
   

  ngOnInit() {
  }

  onAdd(id: Number) {
    this.products.map(product => {
      if(product.id === id) {
        product.isAdded = !product.isAdded;
        localStorage.setItem('products', JSON.stringify([{id: '1', name: 'article 1', image: '/assets/element_1.jpg'}]));
      }
    })
    console.log(this.products);

}




}
