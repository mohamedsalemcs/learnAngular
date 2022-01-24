import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SideMenuComponent } from './components/layout/side-menu/side-menu.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AdminOrdersComponent } from './admin/orders/admin-orders/admin-orders.component';
import { AdminUsersComponent } from './admin/users/admin-users/admin-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AdminProductsComponent } from './admin/products/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/products/product-form/product-form.component';
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
    HomeComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    AdminUsersComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
  ],
  exports: [HeaderComponent, FooterComponent, SideMenuComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
