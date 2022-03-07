import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    AdminComponent,
    NotfoundComponent,
    CheckoutComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
