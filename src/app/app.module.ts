import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ElectricitybillComponent } from './components/electricitybill/electricitybill.component';
import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectricitybillComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
