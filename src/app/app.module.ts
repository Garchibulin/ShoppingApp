import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipeBookComponent } from './RecipeBook/recipebook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  exports: [
    HeaderComponent,
    RecipeBookComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
