import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent,
    NavigationComponent,
    FrontPageComponent,
    PageNotFoundComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
