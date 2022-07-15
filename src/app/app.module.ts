import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgGridDemoComponent } from './agGrid/ag-grid-demo/ag-grid-demo.component';
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataServiceService} from "./agGrid/ag-grid-demo/in-memory-data-service.service";

@NgModule({
  declarations: [
    AppComponent,
    AgGridDemoComponent
  ],
    imports: [
        BrowserModule,
        AgGridModule,
        HttpClientModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
