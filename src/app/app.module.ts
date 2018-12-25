import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThingListComponent } from './thing/thing-list/thing-list.component';
import { ThingComponent } from './thing/thing/thing.component';
import { ThingShellComponent } from './thing/thing-shell/thing-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    ThingListComponent,
    ThingComponent,
    ThingShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
