import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpCachingModule, NgHttpCachingConfig  } from 'ng-http-caching';

//Material UI
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

//Custom Components
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 1000 * 1000 // cache expire after 1000 seconds
};



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    DashboardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
