import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private db: AngularFireDatabase) {}

  // Create New Product
  create(product) {
    this.db.list('/products').push(product);
  }
  // Get All Products
  getProducts() {
    return this.db.list('/products').snapshotChanges();
  }

  // Get Product By ID
  getProduct(productKey: string) {
    return this.db.object('/products' + productKey).valueChanges();
  }
}
