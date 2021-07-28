import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ParentComponent } from './Parenttochilddata/parent/parent.component';
import { ChildComponent } from './Parenttochilddata/parent/child/child.component';
import { GreetComponent } from './contentprojection/greet/greet.component';
import { ViewnoneComponent } from './viewencapsulation/viewnone/viewnone.component';
import { ViewEmulateComponent } from './viewencapsulation/view-emulate/view-emulate.component';
import { ViewShadowdomComponent } from './viewencapsulation/view-shadowdom/view-shadowdom.component';
import { StructuralComponent } from './Directives/structural/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ParentComponent,
    ChildComponent,
    GreetComponent,
    ViewnoneComponent,
    ViewEmulateComponent,
    ViewShadowdomComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
