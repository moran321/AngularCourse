import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './core/header/header.component';
import { MenuComponent } from './core/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContractComponent } from './contract/contract.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductsPageModule } from './content/products-page/products-page.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MenuComponent,
    HomeComponent,
    ContractComponent,
    AboutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
