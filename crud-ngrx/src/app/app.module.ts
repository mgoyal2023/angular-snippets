import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FeatureModule } from "./feature/feature.module";
import { UserReducer } from './feature/store/reducers/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { UserEffects } from './feature/store/effects/user.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ users: UserReducer }),
    EffectsModule.forRoot([UserEffects]),
    FeatureModule,
    HttpClientModule
  ]
})
export class AppModule { }