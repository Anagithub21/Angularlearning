import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipelist',
  templateUrl: './receipelist.component.html',
  styleUrls: ['./receipelist.component.css']
})
export class ReceipelistComponent implements OnInit {
  receipe:Recipe[]=[
    new Recipe('A test receipe',"hellololoolo","https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
