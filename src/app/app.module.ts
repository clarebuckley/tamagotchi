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
import { FormsModule } from '@angular/forms';
import { state } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
    TamagotchiComponent,
    ToolbarComponent,
    ActionButtonBarComponent,
    TamagotchiScreenComponent,
    StartScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
