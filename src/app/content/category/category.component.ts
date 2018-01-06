import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../core/model/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  @Input() category;
  @Output() categorySelected = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }

  onCategorySelected() {
    this.categorySelected.emit(this.category);
  }
}
