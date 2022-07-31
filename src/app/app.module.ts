import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TamagotchiComponent } from '../app/components/tamagotchi/tamagotchi.component';
import { ToolbarComponent } from '../app/components/toolbar/toolbar.component';
import { ActionButtonBarComponent } from '../app/components/action-button-bar/action-button-bar.component';
import { TamagotchiScreenComponent } from './components/screens/tamagotchi-screen/tamagotchi-screen.component';
import { StartScreenComponent } from './components/screens/start-screen/start-screen.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StatsScreenComponent } from './components/screens/stats-screen/stats-screen.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TamagotchiComponent,
    ToolbarComponent,
    ActionButtonBarComponent,
    TamagotchiScreenComponent,
    StartScreenComponent,
    StatsScreenComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
