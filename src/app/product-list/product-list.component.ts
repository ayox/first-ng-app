import { Component, OnInit } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = products;
  counter = 0;
  share() {
    console.log("The product has been shared!");
  }
  onNotify() {
    console.log("You will be notified when the product goes on sale");
  }
  ngOnInit() {
    setInterval(() => {
      this.counter++
    }, 200);
  }
  
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
