import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumPipe } from './pipes/sum.pipe';
import { MathService } from './services/math.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SumPipe
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	MatInputModule,
	MatSelectModule,
	MatButtonModule,
	NoopAnimationsModule
  ],
  providers: [MathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
