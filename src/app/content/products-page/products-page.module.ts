import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsPageRoutingModule,

  ],
  declarations: [
    ProductsPageComponent,
    CategoryListComponent,
    CategoryComponent,
    ProductComponent,
  ]
})
export class ProductsPageModule { }
