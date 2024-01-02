import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
import { PBindingComponent } from './p-binding/p-binding.component';
import { FormsModule } from '@angular/forms';
import { FirstpipePipe } from './firstpipe.pipe';
import { SecondPipePipe } from './second-pipe.pipe';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SampleComponent,
    PBindingComponent,
    FirstpipePipe,
    SecondPipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
