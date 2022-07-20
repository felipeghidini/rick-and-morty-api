import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListApiComponent } from './components/list-api/list-api.component';
import { ListApiService } from './service/list-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ListApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
