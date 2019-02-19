import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './state/app.reducer';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThingListComponent } from './thing/thing-list/thing-list.component';
import { ThingComponent } from './thing/thing/thing.component';
import { ThingShellComponent } from './thing/thing-shell/thing-shell.component';
import { environment } from 'src/environments/environment';
import { ShowComponent } from './show/show/show.component';
import { ShowListComponent } from './show/show-list/show-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ThingListComponent,
    ThingComponent,
    ThingShellComponent,
    ShowComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    DragDropModule,
    RadioButtonModule,
    SidebarModule,
    StoreModule.forRoot({ appState: reducer }),
    StoreDevtoolsModule.instrument({
      name: 'QIQO State Playgroud',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
