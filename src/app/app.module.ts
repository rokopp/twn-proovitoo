import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ListComponent } from './components/list/list.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ListComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
