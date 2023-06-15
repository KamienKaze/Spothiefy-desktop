import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentSongComponent } from './components/legacy/current-song/current-song.component';
import { TrackControlsComponent } from './components/legacy/track-controls/track-controls.component';
import { VolumeControlComponent } from './components/legacy/volume-control/volume-control.component';
import { FormsModule } from "@angular/forms";
import {ColorProviderService} from "./colors-provider/color-provider.service";
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { ArticleSectionComponent } from './components/article-section/article-section.component';
import { PlayerBarSectionComponent } from './components/player-bar-section/player-bar-section.component';
import { NavButtonsContainerComponent } from './components/nav-section/nav-buttons-container/nav-buttons-container.component';
import { LibrarySectionComponent } from './components/nav-section/library-section/library-section.component';
import { NavCheckboxComponent } from './components/nav-section/reusable/nav-checkbox/nav-checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentSongComponent,
    TrackControlsComponent,
    VolumeControlComponent,
    NavSectionComponent,
    ArticleSectionComponent,
    PlayerBarSectionComponent,
    NavButtonsContainerComponent,
    LibrarySectionComponent,
    NavCheckboxComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
