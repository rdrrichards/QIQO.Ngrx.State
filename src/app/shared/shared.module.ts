import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    DragDropModule,
    RadioButtonModule,
    SidebarModule,
  ],
  exports: [
    AccordionModule,
    ButtonModule,
    DragDropModule,
    RadioButtonModule,
    SidebarModule,
  ]
})
export class SharedModule { }
