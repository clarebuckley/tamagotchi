import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexModule} from '@angular/flex-layout/flex';
import {GridModule} from '@angular/flex-layout/grid';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TamagotchiComponent } from '../app/components/tamagotchi/tamagotchi.component';
import { ToolbarComponent } from '../app/components/toolbar/toolbar.component';
import { ActionButtonBarComponent } from '../app/components/action-button-bar/action-button-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TamagotchiComponent,
    ToolbarComponent,
    ActionButtonBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
