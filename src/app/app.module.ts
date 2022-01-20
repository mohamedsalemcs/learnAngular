import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SideMenuComponent } from './components/layout/side-menu/side-menu.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ShoppingCartComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent, SideMenuComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
