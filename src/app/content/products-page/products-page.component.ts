import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../core/model/Category';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onProjectSelected(category: Category) {
    this.router.navigate(['products', category.id]);
  }
}
