import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { citiesReducer } from './store/reducers/cities.recuder'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { WeatherService } from './weather.service';
import { CitiesEffects } from './store/effects/cities.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CitiesEffects]),
    StoreModule.forRoot({
      cities: citiesReducer
    }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
