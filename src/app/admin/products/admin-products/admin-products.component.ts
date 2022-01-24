import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  products$;
  constructor(private product: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.product.getProducts();
  }
}
