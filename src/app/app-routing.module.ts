import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingShellComponent } from './thing/thing-shell/thing-shell.component';

const routes: Routes = [
  { path: 'things', component: ThingShellComponent },
  { path: '', redirectTo: 'things', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
