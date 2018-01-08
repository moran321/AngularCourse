import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../../core/model/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  @Output() categorySelected = new EventEmitter<Category>();

  constructor() {
    this.testData();
   }

  ngOnInit() {
  }

  testData(){
    this.categories = [ 
      new Category(1,"Category1"), 
      new Category(2,"Category2" ), 
      new Category(3,"Category3" ), 
    ];
  }


  onCategorySelected(category: Category) {
    this.categorySelected.emit(category);
  }

 categoryTrack(index: number, category: Category) {
    return category.id;
  }
}
