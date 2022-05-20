import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { PowerToXPipe } from './pipes/power-to-x.pipe';
import { StringConverterPipe } from './pipes/string-converter.pipe';
import { ArraySplicerPipe } from './pipes/array-splicer.pipe';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PowerToXPipe,
    StringConverterPipe,
    ArraySplicerPipe
  ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
