import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Products } from 'src/app/interfaces/products';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  cats$: Observable<any>;
  product = {};
  id = '';

  constructor(
    private cat: CategoriesService,
    private productservice: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      // console.log(this.id);
      this.productservice.getProduct(this.id).subscribe((prod) => {
        if (prod) {
          this.product = prod;
          console.log(prod);
        }
      });
    }
  }

  ngOnInit(): void {
    this.cats$ = this.cat.getCats();
  }
  save(product) {
    this.productservice.create(product);
    this.router.navigateByUrl('admin/products');
  }
}
