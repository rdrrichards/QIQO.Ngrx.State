import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingShellComponent } from './thing/thing-shell/thing-shell.component';
import { ShowListComponent } from './show/show-list/show-list.component';

const routes: Routes = [
  { path: 'things', component: ThingShellComponent },
  { path: 'shows', component: ShowListComponent },
  { path: '', redirectTo: 'things', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
