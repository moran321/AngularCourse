import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContractComponent } from './contract/contract.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductsPageComponent } from './content/products-page/products-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    // { path: 'products', loadChildren: './content/products-page/products-page.module#ProductsPageModule'},
    //  component: ProductsPageComponent },
    { path: 'products', component: ProductsPageComponent },
    { path: 'contract', component: ContractComponent },
    // { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
    { path: '**', component: PageNotFoundComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
