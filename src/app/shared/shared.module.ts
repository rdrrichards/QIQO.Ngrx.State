import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    DragDropModule,
    RadioButtonModule,
    SidebarModule,
    AutoCompleteModule
  ],
  exports: [
    AccordionModule,
    ButtonModule,
    DragDropModule,
    RadioButtonModule,
    SidebarModule,
    AutoCompleteModule
  ]
})
export class SharedModule { }
